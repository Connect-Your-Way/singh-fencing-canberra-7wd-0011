import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — every variant declares the full interaction-state set
 * (default / hover / focus-visible / active / disabled) and consumes only
 * component tokens (--button-*). Focus ring is 2px width @ 2px offset via
 * the shared .focus-ring utility.
 */
const buttonVariants = cva(
  [
    "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md font-semibold select-none",
    "transition-[background-color,color,box-shadow,transform] duration-base ease-standard",
    "active:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-60",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--button-primary-bg)] text-[var(--button-primary-fg)] shadow-sm hover:bg-[var(--button-primary-bg-hover)] active:bg-[var(--button-primary-bg-active)]",
        secondary:
          "bg-[var(--button-secondary-bg)] text-[var(--button-secondary-fg)] shadow-sm hover:bg-[var(--button-secondary-bg-hover)] active:bg-[var(--button-secondary-bg-active)]",
        outline:
          "border border-[var(--button-outline-border)] bg-transparent text-[var(--button-outline-fg)] hover:bg-[var(--button-outline-bg-hover)] active:bg-muted",
        ghost:
          "bg-transparent text-[var(--button-outline-fg)] hover:bg-[var(--button-outline-bg-hover)] active:bg-muted",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-14 px-7 text-lg",
      },
      block: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonBaseProps
  extends VariantProps<typeof buttonVariants> {
  className?: string;
}

type AnchorProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };
type NativeButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

export type ButtonProps = AnchorProps | NativeButtonProps;

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button({ className, variant, size, block, ...props }, ref) {
  const classes = cn(buttonVariants({ variant, size, block }), className);

  if (props.as === "a") {
    const { as: _as, ...rest } = props;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...rest}
      />
    );
  }

  const { as: _as, ...rest } = props as NativeButtonProps;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...rest}
    />
  );
});

export { buttonVariants };
