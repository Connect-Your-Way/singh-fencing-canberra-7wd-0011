import { Phone, Mail, MapPin, Truck, CreditCard } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";
import { site } from "@/lib/site-config";

const trust = [
  { icon: MapPin, label: "Locally based in Gungahlin" },
  { icon: Truck, label: "Mobile service — we come to you" },
  { icon: CreditCard, label: "Cash, EFT, EFTPOS & card accepted" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface-dark">
      {/* Background image (generic stock; not labelled as their work) */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/hero-fence.jpg")}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/75 to-slate-900/55"
          style={{
            background:
              "linear-gradient(120deg, rgb(18 23 26 / 0.92) 0%, rgb(18 23 26 / 0.78) 45%, rgb(18 23 26 / 0.45) 100%)",
          }}
        />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-ondark-border bg-white/5 px-4 py-1.5 text-sm font-medium text-ondark-muted">
            Fencing &amp; gates · {site.region}, {site.state}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-ondark sm:text-5xl lg:text-6xl">
            Quality Fencing &amp; Gates in Gungahlin
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ondark-muted sm:text-xl">
            Locally based in {site.baseSuburb}, {site.name} supplies, installs and
            repairs fences and gates for homes across Gungahlin and the northern
            Canberra suburbs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              as="a"
              href={site.phoneHref}
              variant="primary"
              size="lg"
              className="focus-ring-dark"
            >
              <Phone aria-hidden className="h-5 w-5" />
              Call {site.phoneDisplay}
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

          {/* Trust strip — confirmed facts only */}
          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {trust.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-ondark-muted"
              >
                <Icon aria-hidden className="h-5 w-5 shrink-0 text-accent" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
