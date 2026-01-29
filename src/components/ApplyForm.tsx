"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabaseClient";

const trustPoints = [
  "We review every application within 24 hours.",
  "You’ll get a tailored recommendation for cadence and format.",
  "We’ll align on products, run-of-show, and success metrics.",
];

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  company: z.string().min(2, "Please enter your company name."),
  website: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

function getUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];
  const utm: Record<string, string> = {};
  for (const k of keys) {
    const v = params.get(k);
    if (v) utm[k] = v;
  }
  return utm;
}

export default function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    if (!supabase) {
      setStatus("error");
      setError("Form is not configured yet. Please try again later.");
      return;
    }

    setStatus("submitting");
    setError(null);

    const sourcePage =
      typeof window === "undefined"
        ? null
        : `${window.location.pathname}${window.location.search}`;

    const website = values.website?.trim() || null;
    const message = values.message?.trim() || null;

    const { error: insertError } = await supabase.from("leads").insert({
      full_name: values.fullName.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      website,
      message,
      source_page: sourcePage,
      utm: getUtm(),
    });

    if (insertError) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white/80" htmlFor="fullName">
            Full name
          </label>
          <input
            id="fullName"
            {...register("fullName")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
            placeholder="Jane Doe"
          />
          {errors.fullName && (
            <div className="text-xs text-red-300">{errors.fullName.message}</div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-white/80" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
            placeholder="jane@company.com"
          />
          {errors.email && (
            <div className="text-xs text-red-300">{errors.email.message}</div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-white/80" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          {...register("company")}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
          placeholder="Company name"
        />
        {errors.company && (
          <div className="text-xs text-red-300">{errors.company.message}</div>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-white/80" htmlFor="website">
          Website (optional)
        </label>
        <input
          id="website"
          {...register("website")}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
          placeholder="https://"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-white/80" htmlFor="message">
          Message (optional)
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
          placeholder="What do you sell and where do you sell it?"
        />
      </div>

      {status === "success" && (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-100">
          Thanks — we&apos;ll follow up within 24 hours.
        </div>
      )}

      {status === "error" && error && (
        <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-2xl bg-gradient-to-r from-[#4C6FFF] to-[#35D0BA] px-6 py-3 font-semibold text-[#0B0F1A] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-semibold text-white">What happens next</div>
        <ul className="mt-2 space-y-2 text-sm text-white/70">
          {trustPoints.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#35D0BA]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 text-xs text-white/50">
          We only use this info to respond to your request.
        </div>
      </div>
    </form>
  );
}
