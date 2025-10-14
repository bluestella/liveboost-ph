import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — LiveBoost PH",
  description: "Get in touch with LiveBoost PH to start your live selling program.",
  openGraph: {
    title: "Contact LiveBoost PH",
    description: "Questions about plans or onboarding? Reach out to our team.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-700">We&apos;d love to hear from you.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="rounded-xl border bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Reach us</h2>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>Email: contact@liveboostph.com</li>
            <li>Location: Philippines</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Send a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}