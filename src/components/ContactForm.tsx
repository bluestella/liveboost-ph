"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!/.+@.+\..+/.test(email)) { setError("Please enter a valid email."); return; }
    if (!message.trim()) { setError("Please enter a message."); return; }
    setSuccess(true);
  };

  return (
    <form onSubmit={onSubmit} className="mt-3 space-y-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full rounded-md border px-4 py-2"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full rounded-md border px-4 py-2"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        className="w-full rounded-md border px-4 py-2 min-h-32"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && <p className="text-green-700 text-sm">Thanks! We&apos;ll get back to you shortly.</p>}
      <button type="submit" className="rounded-lg bg-blue-600 text-white px-5 py-2 font-semibold hover:bg-blue-700 shadow-md hover:shadow-xl">
        Submit
      </button>
    </form>
  );
}