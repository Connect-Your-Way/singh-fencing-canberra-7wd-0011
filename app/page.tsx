import { SiteHeader } from "@/components/site-header";
import { StickyCall } from "@/components/sticky-call";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Why } from "@/components/sections/why";
import { Areas } from "@/components/sections/areas";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <Services />
        <Why />
        <Areas />
        <HowItWorks />
        <Contact />
      </main>
      <SiteFooter />
      <StickyCall />
    </>
  );
}
