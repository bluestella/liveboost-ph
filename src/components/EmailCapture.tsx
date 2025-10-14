"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { LoaderCircle } from "lucide-react";

const schema = z.object({ email: z.string().email("Please enter a valid email.") });
type FormValues = z.infer<typeof schema>;

export default function EmailCapture({ source }: { source?: string }) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    setSuccess(false);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email, source: source ?? window.location.pathname }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Subscription failed");
      }
      setSuccess(true);
      reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : typeof err === "string" ? err : "Something went wrong";
      setServerError(message);
    }
  };

  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-2xl font-bold">Get Updates and Launch Offers</h2>
      <p className="mt-2 text-gray-700">Leave your email and we&apos;ll reach out.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="flex-1 rounded-md border px-4 py-3 bg-white"
          aria-invalid={!!errors.email || undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        <Button type="submit" variant="secondary" size="md" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2"><LoaderCircle className="h-4 w-4 animate-spin" /> Submitting...</span>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
      {errors.email && (
        <p id="email-error" className="mt-2 text-red-600">{errors.email.message}</p>
      )}
      {serverError && <p className="mt-2 text-red-600">{serverError}</p>}
      {success && <p className="mt-2 text-green-700">✓ Thanks! We&apos;ll be in touch soon.</p>}
      <p className="mt-4 text-xs text-gray-500">We respect your privacy. No spam.</p>
    </div>
  );
}