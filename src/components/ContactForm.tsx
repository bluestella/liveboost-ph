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
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full rounded-2xl border-2 border-gray-200 px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full rounded-2xl border-2 border-gray-200 px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your business and how we can help..."
          rows={6}
          className="w-full rounded-2xl border-2 border-gray-200 px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
        />
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
          <p className="text-red-600 text-sm font-medium">{error}</p>
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
          <p className="text-green-700 text-sm font-medium">
            Thanks! We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}
      
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      >
        Send Message
      </button>
    </form>
  );
}