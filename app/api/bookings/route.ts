'use server';

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  try {
    console.log("Booking request received:", payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error handling booking request:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

