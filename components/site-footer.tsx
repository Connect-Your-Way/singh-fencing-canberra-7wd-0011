import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-ondark-muted">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-heading text-lg font-bold text-ondark">
              <span
                aria-hidden
                className="inline-block h-6 w-1.5 rounded-full bg-accent"
              />
              {site.name}
            </div>
            <p className="mt-3 text-sm">
              Fencing and gates for homes across Gungahlin and the northern
              Canberra suburbs.
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href={site.phoneHref}
              className="focus-ring-dark inline-flex items-center gap-2 rounded text-ondark transition-colors duration-fast ease-standard hover:text-accent"
            >
              <Phone aria-hidden className="h-5 w-5 text-accent" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="focus-ring-dark inline-flex items-center gap-2 rounded break-all transition-colors duration-fast ease-standard hover:text-accent"
            >
              <Mail aria-hidden className="h-5 w-5 text-accent" />
              {site.email}
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin aria-hidden className="h-5 w-5 text-accent" />
              Gungahlin, {site.state}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ondark">
              Follow us
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Singh Fencing Canberra on Facebook"
                className="focus-ring-dark inline-flex h-11 w-11 items-center justify-center rounded-md border border-ondark-border transition-colors duration-fast ease-standard hover:bg-white/10 hover:text-accent"
              >
                <Facebook aria-hidden className="h-5 w-5" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Singh Fencing Canberra on Instagram"
                className="focus-ring-dark inline-flex h-11 w-11 items-center justify-center rounded-md border border-ondark-border transition-colors duration-fast ease-standard hover:bg-white/10 hover:text-accent"
              >
                <Instagram aria-hidden className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ondark-border pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}.</p>
          {/* Mandatory demo attribution (webdev-factory SPEC §5.5) */}
          <p className="text-ondark-muted">
            Demo prepared by Connect Your Way —{" "}
            <a
              href="https://connectyourway.au"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring-dark rounded underline underline-offset-2 transition-colors duration-fast ease-standard hover:text-accent"
            >
              connectyourway.au
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
