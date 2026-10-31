"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/config/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section id="faq" className="section-pad bg-white"><div className="container-page grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Questions, answered</p><h2 className="section-title">THE USEFUL STUFF.</h2><p className="mt-5 max-w-sm leading-7 text-ink/65">Need something else? Send us a WhatsApp and we’ll point you in the right direction.</p></div><div className="divide-y divide-ink/10 border-y border-ink/10">{faqs.map(([question, answer], index) => <div key={question}><button type="button" className="flex w-full items-center justify-between gap-5 py-5 text-left font-display text-lg font-bold tracking-[-.03em]" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>{question}{open === index ? <Minus className="shrink-0 text-peach"/> : <Plus className="shrink-0 text-plum"/>}</button>{open === index && <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-ink/65">{answer}</p>}</div>)}</div></div></section>;
}
