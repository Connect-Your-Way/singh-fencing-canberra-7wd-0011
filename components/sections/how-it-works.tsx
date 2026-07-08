import { PhoneCall, Ruler, Hammer } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    icon: PhoneCall,
    title: "Get in touch",
    body: "Call or email with what you need.",
  },
  {
    icon: Ruler,
    title: "On-site quote",
    body: "We come out, measure up and talk through your options.",
  },
  {
    icon: Hammer,
    title: "We build it",
    body: "Your fence or gate installed, or your gate repaired.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-background py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Getting your fence sorted"
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative flex flex-col items-start">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <Icon aria-hidden className="h-6 w-6" />
                </span>
                <span
                  aria-hidden
                  className="font-heading text-5xl font-bold text-muted"
                >
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
