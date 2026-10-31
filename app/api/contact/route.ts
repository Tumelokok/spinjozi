import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const form = await request.json() as Record<string, string>;
    const required = ["name", "phone"];
    if (required.some((field) => !form[field]?.trim()) || (form.email && !emailPattern.test(form.email))) {
      return NextResponse.json({ error: "Please add your name, phone number, and a valid email address if supplied." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL || "spinjozi@yahoo.com";
    if (!apiKey || !from) {
      console.error("Contact email is not configured. Add RESEND_API_KEY and CONTACT_FROM_EMAIL.");
      return NextResponse.json({ error: "Online enquiries are being set up. Please use WhatsApp for now." }, { status: 503 });
    }

    const details = [
      ["Name", form.name], ["Phone / WhatsApp", form.phone], ["Email", form.email || "Not provided"],
      ["Event", form.eventType || "Not provided"], ["Date", form.eventDate || "Not provided"],
      ["Location", form.location || "Not provided"], ["Hours", form.hours || "Not provided"], ["Message", form.message || "Not provided"],
    ].map(([label, value]) => `${label}: ${value}`).join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: form.email || undefined, subject: `New SpinJozi enquiry from ${form.name}`, text: details }),
    });
    if (!response.ok) {
      console.error("Resend rejected the contact email", await response.text());
      return NextResponse.json({ error: "We could not send your enquiry. Please try WhatsApp." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Please try again or contact us on WhatsApp." }, { status: 400 });
  }
}
