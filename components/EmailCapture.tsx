"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/ui/Button";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

type FormValues = z.infer<typeof schema>;

export default function EmailCapture({ source = "home" }: { source?: string }) {
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    setStatus("loading");
    setMessage("");
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      setStatus("idle");
      setError("email", { type: "manual", message: "Please enter a valid email." });
      return;
    }
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.data.email, source }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setStatus("success");
      setMessage("Thanks! Check your email for next steps.");
      reset();
    } catch (error: unknown) {
      setStatus("error");
      const msg = error instanceof Error ? error.message : "Unable to subscribe. Please try again.";
      setMessage(msg);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md" aria-label="Email subscription form">
      <div className="flex items-center gap-2">
        <input
          type="email"
          aria-label="Email address"
          aria-invalid={!!errors.email}
          {...register("email")}
          placeholder="Enter your email"
          className="flex-1 rounded-md border border-black/10 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]"
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </Button>
      </div>
      {errors.email && (
        <p className="mt-2 text-xs text-red-600" role="alert">
          {errors.email.message}
        </p>
      )}
      {message && (
        <p className="mt-2 text-xs" aria-live="polite">
          {message}
        </p>
      )}
      <p className="mt-2 text-[11px] text-black/60">We respect your privacy. No spam.</p>
    </form>
  );
}