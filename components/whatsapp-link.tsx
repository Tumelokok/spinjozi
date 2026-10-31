"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

type Props = { children: React.ReactNode; className?: string; message?: string };

export function whatsappUrl(message = "Hi SpinJozi! I’d like to check availability for a 360° booth.") {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "#contact";
}

export function WhatsAppLink({ children, className = "button-primary", message }: Props) {
  return <a className={className} href={whatsappUrl(message)} aria-label="Contact SpinJozi on WhatsApp"><MessageCircle size={18} aria-hidden="true" />{children}</a>;
}

export function FloatingWhatsApp() {
  return <a href={whatsappUrl()} className="fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-extrabold text-[#102d1b] shadow-xl transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-7 sm:right-7" aria-label="Book on WhatsApp"><MessageCircle size={21} fill="currentColor" /> <span>WhatsApp us</span></a>;
}
