import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/whatsapp-link";
import { FAQ } from "@/components/faq";
import { Contact, EventTypes, Gallery, Hero, HowItWorks, Included, Pricing, WhyAndArea } from "@/components/site-sections";
import { siteConfig } from "@/config/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org", "@type": "LocalBusiness", name: siteConfig.name, description: siteConfig.description,
    areaServed: siteConfig.serviceAreas, priceRange: "R1,499–R3,499",
  };
  return <><Navbar/><main><Hero/><Pricing/><Included/><HowItWorks/><EventTypes/><Gallery/><WhyAndArea/><FAQ/><Contact/></main><Footer/><FloatingWhatsApp/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
