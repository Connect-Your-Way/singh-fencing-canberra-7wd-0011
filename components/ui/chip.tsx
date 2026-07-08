import * as React from "react";
import { cn } from "@/lib/utils";

/** Chip / badge — consumes component tokens (--chip-*). */
export function Chip({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium",
        "border-[var(--chip-border)] bg-[var(--chip-bg)] text-[var(--chip-fg)]",
        className,
      )}
      {...props}
    />
  );
}
