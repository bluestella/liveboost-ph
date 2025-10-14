import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Declare a typed global to store deduped subscribers across requests
declare global {
  // eslint-disable-next-line no-var
  var __liveboost_subscribers: Set<string> | undefined;
}

const bodySchema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
});

// Naive in-memory dedupe (resets on restart)
const dedupe: Set<string> = (globalThis.__liveboost_subscribers ??= new Set<string>());

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    const { email, source } = parsed.data;

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!ADMIN_EMAIL || !FROM_EMAIL || !RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(RESEND_API_KEY);

    const timestamp = new Date().toISOString();

    // Optional dedupe
    const isDuplicate = dedupe.has(email);
    if (!isDuplicate) dedupe.add(email);

    // Send admin notification
    const adminPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: "🎯 New LiveBoost PH Lead",
      html: `<p>New subscriber: <strong>${email}</strong></p>
             <p>Time: ${timestamp}</p>
             <p>Page: ${source ?? "unknown"}</p>`,
    });

    // Send subscriber welcome
    const userPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Welcome to LiveBoost PH!",
      html: `<p>Thanks for subscribing to LiveBoost PH.</p>
             <p>We’ll reach out soon. Meanwhile, see our <a href="${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/pricing">pricing</a>.</p>`,
    });

    await Promise.all([adminPromise, userPromise]);

    return NextResponse.json({ success: true, duplicate: isDuplicate });
  } catch (err: unknown) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}