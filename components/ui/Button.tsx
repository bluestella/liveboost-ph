"use client";
import React from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
};

export default function Button({
  variant = "primary",
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow hover:shadow-md";
  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-secondary-500",
    secondary:
      "bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-500",
    outline:
      "bg-transparent text-secondary-600 border border-secondary-600 hover:bg-accent-50",
  } as const;

  return (
    <button
      className={cx(base, variants[variant], fullWidth && "w-full", className)}
      {...props}
    />
  );
}