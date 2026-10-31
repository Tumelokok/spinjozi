"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const fields = [
  ["name", "Name", "text", true], ["phone", "Phone / WhatsApp", "tel", true], ["email", "Email", "email", false], ["eventDate", "Event date", "date", false], ["location", "Event location", "text", false],
] as const;

export function BookingForm() {
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!String(data.get("name") || "").trim() || !String(data.get("phone") || "").trim()) { setNotice("Please add your name and phone / WhatsApp number."); return; }
    setIsSubmitting(true); setNotice("");
    const payload = Object.fromEntries(data.entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "We could not send your enquiry.");
      setNotice("Thank you — your enquiry has been sent. We’ll be in touch soon.");
      event.currentTarget.reset();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "We could not send your enquiry. Please use WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  }
  const inputStyle = "mt-2 min-h-12 w-full rounded-xl border border-ink/10 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-ink/35 focus:border-plum focus:ring-4 focus:ring-plum/10";
  return <form onSubmit={submit} noValidate className="rounded-[2rem] bg-white p-5 shadow-float sm:p-8"><div className="mb-6 flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-peach" /><p className="text-sm leading-6 text-ink/65">Tell us the basics and we’ll send your quote request straight to our team.</p></div><div className="grid gap-5 sm:grid-cols-2">{fields.map(([id, label, type, required]) => <label key={id} className="text-sm font-extrabold text-ink">{label}{required && <span className="text-peach"> *</span>}<input className={inputStyle} name={id} type={type} required={required} /></label>)}<label className="text-sm font-extrabold text-ink">Event type<select className={inputStyle} name="eventType" defaultValue=""><option value="" disabled>Select an event</option>{["Wedding", "Birthday", "Graduation", "Matric Ball", "Corporate Event", "Year-End Function", "Brand Activation", "Private Party", "Other"].map(x => <option key={x}>{x}</option>)}</select></label><label className="text-sm font-extrabold text-ink">Number of hours<select className={inputStyle} name="hours" defaultValue=""><option value="" disabled>Select a package</option>{siteConfig.packages.map(x => <option key={x.hours}>{x.hours}</option>)}<option>Custom package</option></select></label></div><label className="mt-5 block text-sm font-extrabold text-ink">Anything else we should know?<textarea className={`${inputStyle} min-h-28 py-3`} name="message" placeholder="Tell us a little about your event..." /></label>{notice && <p role="alert" className="mt-4 text-sm font-bold text-peach">{notice}</p>}<button className="button-primary mt-6 w-full" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Request my quote"} <ArrowUpRight size={18} /></button>{siteConfig.phone ? <a href={`tel:${siteConfig.phone}`} className="mt-4 flex items-center justify-center gap-2 text-sm font-extrabold text-plum hover:underline"><Phone size={16} /> Prefer to call? {siteConfig.phone}</a> : <p className="mt-4 text-center text-xs font-bold text-ink/45">Phone CTA will appear once a contact number is added in <code>config/site.ts</code>.</p>}</form>;
}
