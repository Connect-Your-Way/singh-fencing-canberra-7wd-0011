import { MapPin, Truck, CreditCard, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const points = [
  {
    icon: MapPin,
    title: "Gungahlin-based",
    body: "We're local to Amaroo and know the northern Canberra suburbs.",
  },
  {
    icon: Truck,
    title: "We come to you",
    body: "Mobile service for quotes and installation.",
  },
  {
    icon: CreditCard,
    title: "Easy payment",
    body: "Cash, EFT, EFTPOS, Mastercard and Visa accepted.",
  },
  {
    icon: Clock,
    title: "Early starts",
    body: "Open from 6:00 am, so work can start early and stay on schedule.",
  },
];

export function Why() {
  return (
    <section id="why" className="scroll-mt-20 bg-surface-muted py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Singh Fencing"
          title="Local, straightforward, mobile"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col rounded-[var(--card-radius)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--card-shadow)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">
                {title}
              </h3>
              <p className="mt-1.5 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
