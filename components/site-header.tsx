"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site, nav } from "@/lib/site-config";

function Wordmark({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn(
        "focus-ring-dark flex items-center gap-2 rounded-md py-1 font-heading text-lg font-bold tracking-tight text-ondark",
        className,
      )}
    >
      <span
        aria-hidden
        className="inline-block h-6 w-1.5 rounded-full bg-accent"
      />
      {site.name}
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur supports-[backdrop-filter]:bg-[var(--nav-bg)]">
      <Container className="flex h-16 items-center justify-between">
        <Wordmark />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring-dark rounded-md px-3 py-2 text-sm font-medium text-[var(--nav-link)] transition-colors duration-fast ease-standard hover:text-[var(--nav-link-hover)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            as="a"
            href={site.phoneHref}
            variant="primary"
            size="sm"
            className="focus-ring-dark hidden sm:inline-flex"
          >
            <Phone aria-hidden className="h-4 w-4" />
            {site.phoneDisplay}
          </Button>

          {/* Mobile menu trigger */}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="focus-ring-dark inline-flex h-10 w-10 items-center justify-center rounded-md text-ondark transition-colors duration-fast ease-standard hover:bg-white/10 lg:hidden"
              >
                <Menu aria-hidden className="h-6 w-6" />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 lg:hidden" />
              <Dialog.Content
                aria-describedby={undefined}
                className="fixed inset-y-0 right-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-surface-dark p-6 shadow-xl focus:outline-none lg:hidden"
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-heading text-base font-bold text-ondark">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="focus-ring-dark inline-flex h-10 w-10 items-center justify-center rounded-md text-ondark transition-colors duration-fast ease-standard hover:bg-white/10"
                    >
                      <X aria-hidden className="h-6 w-6" />
                    </button>
                  </Dialog.Close>
                </div>

                <nav
                  className="mt-6 flex flex-col gap-1"
                  aria-label="Mobile"
                >
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="focus-ring-dark rounded-md px-3 py-3 text-base font-medium text-[var(--nav-link)] transition-colors duration-fast ease-standard hover:bg-white/10 hover:text-[var(--nav-link-hover)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-3 pt-6">
                  <Button
                    as="a"
                    href={site.phoneHref}
                    variant="primary"
                    size="lg"
                    block
                    onClick={() => setOpen(false)}
                  >
                    <Phone aria-hidden className="h-5 w-5" />
                    {site.phoneDisplay}
                  </Button>
                  <Button
                    as="a"
                    href={site.emailHref}
                    variant="outline"
                    size="md"
                    block
                    className="border-[var(--nav-border)] text-ondark hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    Email us
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
