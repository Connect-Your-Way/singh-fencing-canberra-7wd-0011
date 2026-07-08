import { Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Chip } from "@/components/ui/chip";
import { asset } from "@/lib/utils";
import { site } from "@/lib/site-config";

export function Areas() {
  return (
    <section
      id="areas"
      className="relative scroll-mt-20 overflow-hidden bg-surface-dark py-20 sm:py-24"
    >
      {/* Low-key timber texture background */}
      <div className="absolute inset-0" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/areas-texture.jpg")}
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-surface-dark/70" />
      </div>

      <Container className="relative">
        <SectionHeading
          onDark
          eyebrow="Areas We Serve"
          title="Serving Gungahlin & North Canberra"
          subtitle="We work throughout Gungahlin and the surrounding northern suburbs."
        />

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {site.suburbs.map((suburb) => (
            <li key={suburb}>
              <Chip>
                <MapPin aria-hidden className="h-4 w-4 text-accent" />
                {suburb}
              </Chip>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-lg text-ondark-muted">
            In a nearby suburb? Give us a call — if you&apos;re in the north
            Canberra area, chances are we can help.
          </p>
          <a
            href={site.phoneHref}
            className="focus-ring-dark mt-4 inline-flex items-center gap-2 rounded-md text-lg font-bold text-accent transition-colors duration-fast ease-standard hover:text-accent-hover"
          >
            <Phone aria-hidden className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
