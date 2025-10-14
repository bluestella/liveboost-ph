import { NextResponse } from "next/server";
import { z } from "zod";
import { sendAdminNotification, sendWelcomeEmail } from "@/lib/email";

const bodySchema = z.object({
  email: z.string().email(),
  source: z.string().default("home"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    const { email, source } = parsed.data;

    await Promise.all([sendAdminNotification(email, source), sendWelcomeEmail(email)]);
    return NextResponse.json({ success: true });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}