'use server';

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "re_JqRZRUmv_GWqprYYm6fiWkdejSte3xpNZ");
const RECIPIENT = "shreyanshdadheech@gmail.com";
const FROM_ADDRESS = "EWealth Management GmbH <info@ewealth-management.de>";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

const isValidEmail = (value: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage" }, { status: 400 });
  }

  const { name, email, phone, company, message } = payload;

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }, { status: 422 });
  }

  const submittedAt = new Date().toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    dateStyle: "full",
    timeStyle: "short",
  });

  const html = `
    <table cellpadding="0" cellspacing="0" style="width:100%;font-family:Arial,Helvetica,sans-serif;background-color:#f7f7f7;padding:24px 0;color:#1b2430;">
      <tr>
        <td align="center">
          <table cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 16px 40px rgba(13,16,23,0.12);">
            <tr>
              <td style="padding:32px 36px;background:linear-gradient(135deg,#0d1b2a,#1b263b);color:#ffffff;">
                <h1 style="margin:0;font-size:24px;line-height:1.4;">Neue Kontaktanfrage</h1>
                <p style="margin:8px 0 0;font-size:14px;opacity:0.8;">EWealth Management GmbH – digitales Kontaktformular</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 36px;">
                <p style="margin:0 0 12px;font-size:16px;">
                  Guten Tag,<br/>
                  es ist eine neue Anfrage über das Kontaktformular eingegangen.
                </p>
                <table cellpadding="0" cellspacing="0" style="width:100%;margin:24px 0;border-collapse:collapse;">
                  <tbody>
                    <tr>
                      <td style="width:160px;padding:12px 0;font-weight:600;border-bottom:1px solid #e5e7eb;">Name</td>
                      <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;font-weight:600;border-bottom:1px solid #e5e7eb;">E-Mail</td>
                      <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(email)}</td>
                    </tr>
                    ${phone ? `
                      <tr>
                        <td style="padding:12px 0;font-weight:600;border-bottom:1px solid #e5e7eb;">Telefon</td>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(phone)}</td>
                      </tr>
                    ` : ""}
                    ${company ? `
                      <tr>
                        <td style="padding:12px 0;font-weight:600;border-bottom:1px solid #e5e7eb;">Unternehmen</td>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(company)}</td>
                      </tr>
                    ` : ""}
                    <tr>
                      <td style="padding:12px 0;font-weight:600;vertical-align:top;">Nachricht</td>
                      <td style="padding:12px 0;white-space:pre-line;">${escapeHtml(message)}</td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin:0;font-size:14px;color:#4b5563;">Übermittelt am ${submittedAt}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 36px;background-color:#f1f5f9;font-size:12px;color:#6b7280;">
                Diese Benachrichtigung wurde automatisch von der Website der EWealth Management GmbH erstellt. Bitte antworten Sie direkt an die E-Mail-Adresse des Interessenten.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: RECIPIENT,
      replyTo: email,
      subject: "EWealth Management GmbH – Neue Anfrage vom Kontaktformular",
      html,
      headers: {
        "X-Entity-Ref-ID": `ewealth-contact-${Date.now()}`,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error", error);
    return NextResponse.json(
      { ok: false, error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

