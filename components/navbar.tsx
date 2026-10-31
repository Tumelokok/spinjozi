"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { WhatsAppLink } from "./whatsapp-link";

const links = [["Home", "#home"], ["Pricing", "#pricing"], ["How It Works", "#how-it-works"], ["Events", "#events"], ["FAQ", "#faq"], ["Contact", "#contact"]] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-lg"><nav className="container-page flex h-[72px] items-center justify-between" aria-label="Main navigation"><a href="#home" className="font-display text-2xl font-bold tracking-[-.07em] text-ink">SPIN<span className="text-peach">JOZI</span></a><div className="hidden items-center gap-7 lg:flex">{links.slice(1).map(([name, href]) => <a key={href} href={href} className="text-sm font-bold text-ink/70 transition hover:text-plum">{name}</a>)}<WhatsAppLink className="button-dark min-h-10 px-5 py-2">Book your booth</WhatsAppLink></div><button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button></nav>{open && <div className="border-t border-ink/5 bg-cream px-5 pb-6 pt-3 lg:hidden"><div className="container-page flex flex-col gap-1 px-0">{links.map(([name, href]) => <a key={href} onClick={() => setOpen(false)} href={href} className="rounded-xl px-4 py-3 text-base font-bold hover:bg-white">{name}</a>)}<WhatsAppLink className="button-primary mt-3">Book your booth</WhatsAppLink></div></div>}</header>;
}
