'use client';

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus('error');
      setErrorMessage(t.contactPage.form.error);
      form.reportValidity();
      return;
    }

    setStatus('loading');
    setErrorMessage(null);

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || t.contactPage.form.error);
    }

    setStatus('success');
    form.reset();
    } catch (error) {
      console.error('Kontaktformular Fehler', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error && error.message ? error.message : t.contactPage.form.error,
      );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl font-bold mb-4">{t.contactPage.title}</h1>
            <p className="text-muted-foreground text-lg">{t.contactPage.intro}</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card/80 p-6 shadow-lg backdrop-blur">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">{t.contactPage.form.nameLabel}</Label>
                  <Input id="name" name="name" required placeholder={t.contactPage.form.nameLabel.replace('*', '').trim()} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">{t.contactPage.form.emailLabel}</Label>
                  <Input id="email" name="email" type="email" required placeholder={t.contactPage.form.emailLabel.replace('*', '').trim()} />
                </div>
                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">{t.contactPage.form.phoneLabel}</Label>
                    <Input id="phone" name="phone" placeholder="+49 176 23112985" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">{t.contactPage.form.companyLabel}</Label>
                    <Input id="company" name="company" placeholder="EWealth Management GmbH" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">{t.contactPage.form.messageLabel}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t.contactPage.form.messagePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full md:w-auto px-6" disabled={status === 'loading'}>
                    {t.contactPage.form.submitButton}
                  </Button>
                  {status === 'success' && (
                    <span className="text-sm font-medium text-emerald-500">{t.contactPage.form.success}</span>
                  )}
                  {status === 'error' && (
                    <span className="text-sm font-medium text-destructive">
                      {errorMessage ?? t.contactPage.form.error}
                    </span>
                  )}
                </div>
              </div>
            </form>

            <aside className="space-y-8 rounded-2xl bg-muted/40 p-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{t.contactPage.info.heading}</h2>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <a href="mailto:info@ewealth-management.de" className="flex items-center gap-3 hover:text-foreground transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>
                      <strong className="block text-foreground/90">{t.contactPage.info.emailLabel}</strong>
                      info@ewealth-management.de
                    </span>
                  </a>
                  <a href="tel:+4917623112985" className="flex items-center gap-3 hover:text-foreground transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>
                      <strong className="block text-foreground/90">{t.contactPage.info.phoneLabel}</strong>
                      +49 176 23112985
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/laura-klara-s-a025681b2/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-accent" />
                    <span>
                      <strong className="block text-foreground/90">{t.contactPage.info.linkedinLabel}</strong>
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground/90">{t.contactPage.info.servicesHeading}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{t.contactPage.info.serviceChange}</li>
                  <li>{t.contactPage.info.serviceInternational}</li>
                  <li>{t.contactPage.info.serviceProject}</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
