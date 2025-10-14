"use client";

import { useState } from "react";

export default function ContactPage() {
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
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-700">We&apos;d love to hear from you.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Reach us</h2>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>Email: contact@liveboostph.com</li>
            <li>Contact form coming soon</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Send a message</h2>
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
            <button type="submit" className="rounded-md bg-blue-600 text-white px-5 py-2 font-semibold hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}