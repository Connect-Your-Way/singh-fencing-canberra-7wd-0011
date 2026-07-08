import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-surface-muted py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-card shadow-lg">
          <div className="bg-surface-dark px-6 py-10 text-center sm:px-10">
            <SectionHeading
              onDark
              eyebrow="Get a Quote"
              title="Get a quote on your fence or gate"
              subtitle={`Call or email ${site.name} for a quote on your fence or gate.`}
            />

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                as="a"
                href={site.phoneHref}
                variant="primary"
                size="lg"
                className="focus-ring-dark"
              >
                <Phone aria-hidden className="h-5 w-5" />
                {site.phoneDisplay}
              </Button>
              <Button
                as="a"
                href={site.emailHref}
                variant="outline"
                size="lg"
                className="border-ondark-border text-ondark hover:bg-white/10 focus-ring-dark"
              >
                <Mail aria-hidden className="h-5 w-5" />
                Email us
              </Button>
            </div>
          </div>

          <dl className="grid gap-px bg-border sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 bg-card px-5 py-7 text-center">
              <Phone aria-hidden className="h-6 w-6 text-primary" />
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Phone
              </dt>
              <dd>
                <a
                  href={site.phoneHref}
                  className="focus-ring rounded font-bold text-foreground transition-colors duration-fast ease-standard hover:text-primary"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex flex-col items-center gap-2 bg-card px-5 py-7 text-center">
              <Mail aria-hidden className="h-6 w-6 text-primary" />
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Email
              </dt>
              <dd>
                <a
                  href={site.emailHref}
                  className="focus-ring rounded break-all font-bold text-foreground transition-colors duration-fast ease-standard hover:text-primary"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col items-center gap-2 bg-card px-5 py-7 text-center">
              <MapPin aria-hidden className="h-6 w-6 text-primary" />
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Area
              </dt>
              <dd className="font-medium text-foreground">
                Based in Gungahlin ({site.baseSuburb}), {site.state} — servicing
                north Canberra.
              </dd>
            </div>
          </dl>

          <div className="flex items-center justify-center gap-2 border-t border-border bg-surface-warm px-6 py-4 text-center">
            <Clock aria-hidden className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm font-medium text-foreground">
              Open from 6:00 am — call anytime to arrange a quote.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
