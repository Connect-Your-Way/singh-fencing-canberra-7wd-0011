import { Phone } from "lucide-react";
import { site } from "@/lib/site-config";

/**
 * Sticky mobile call bar — a trade site's #1 job is to make the phone ring.
 * Fixed to the bottom on small screens only; hidden on lg where the header CTA
 * is always visible.
 */
export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary-active bg-primary p-3 shadow-xl lg:hidden">
      <a
        href={site.phoneHref}
        className="focus-ring flex h-12 items-center justify-center gap-2 rounded-md text-lg font-bold text-primary-foreground"
      >
        <Phone aria-hidden className="h-5 w-5" />
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
