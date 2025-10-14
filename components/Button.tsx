"use client";
import React from "react";
// Minimal classnames helper to avoid external dependency
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
};

export default function Button({
  variant = "primary",
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[#e6602f] focus-visible:ring-[var(--color-secondary)]",
    secondary:
      "bg-[var(--color-secondary)] text-white hover:bg-[#003f70] focus-visible:ring-[var(--color-secondary)]",
    ghost:
      "bg-transparent text-[var(--color-secondary)] border border-[var(--color-secondary)] hover:bg-[var(--color-accent)]",
  } as const;

  return (
    <button
      className={cx(base, variants[variant], fullWidth && "w-full", className)}
      {...props}
    />
  );
}