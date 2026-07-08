import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { asset } from "@/lib/utils";
import { site } from "@/lib/site-config";

const services = [
  {
    title: "Fence Supply & Installation",
    body: "New and replacement fencing installed across Gungahlin homes, measured and built to suit your boundary.",
    image: "/assets/service-fence-supply.jpg",
  },
  {
    title: "Hardwood & Timber Fencing",
    body: "Durable hardwood timber fencing for privacy and street appeal.",
    image: "/assets/service-hardwood.jpg",
  },
  {
    title: "Gate Installation",
    body: "Gates supplied and fitted to match your fence and access needs.",
    image: "/assets/service-gate-install.jpg",
  },
  {
    title: "Gate Repairs",
    body: "Sagging, sticking or damaged gate? We repair existing gates so they swing and latch properly again.",
    image: "/assets/service-gate-repair.jpg",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="From a new fence to a gate repair"
          subtitle="From a brand-new boundary fence to a gate that needs fixing, we handle it."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-[var(--card-radius)] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] transition-shadow duration-base ease-standard hover:shadow-[var(--card-shadow-hover)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(service.image)}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-base ease-standard group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{service.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Honest catch-all — no invented service claims */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-[var(--card-radius)] border border-border bg-surface-warm px-6 py-8 text-center">
          <p className="max-w-xl text-lg text-foreground">
            Not sure what suits your property? Give us a call and we&apos;ll talk
            through the options.
          </p>
          <a
            href={site.phoneHref}
            className="focus-ring inline-flex items-center gap-2 rounded-md text-lg font-bold text-primary transition-colors duration-fast ease-standard hover:text-primary-hover"
          >
            <Phone aria-hidden className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
