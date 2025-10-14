const resendApiKey = process.env.RESEND_API_KEY;
const adminEmail = process.env.ADMIN_EMAIL;
const fromEmail = process.env.FROM_EMAIL || "hello@liveboostph.com";

export async function sendAdminNotification(email: string, source: string): Promise<{ ok: true } | { skipped: true }> {
  if (!resendApiKey || !adminEmail) return { skipped: true };
  const timestamp = new Date().toISOString();
  const subject = "New LiveBoost PH Lead";
  const html = `
    <h1>New LiveBoost PH Lead</h1>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Source:</strong> ${source}</p>
    <p><strong>Timestamp:</strong> ${timestamp}</p>
  `;
  try {
    const { Resend } = await import("resend");
    const client = new Resend(resendApiKey);
    await client.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject,
      html,
    });
    return { ok: true };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.warn("Resend admin notification skipped:", msg);
    return { skipped: true };
  }
}

export async function sendWelcomeEmail(email: string): Promise<{ ok: true } | { skipped: true }> {
  if (!resendApiKey) return { skipped: true };
  const subject = "Welcome to LiveBoost PH!";
  const html = `
    <h1>Welcome to LiveBoost PH!</h1>
    <p>Thanks for subscribing. We're excited to help boost your sales through professional live selling.</p>
    <p>Next steps: explore our pricing tiers and choose the plan that fits your business.</p>
    <p><a href="https://liveboostph.com/pricing">View Pricing</a></p>
  `;
  try {
    const { Resend } = await import("resend");
    const client = new Resend(resendApiKey);
    await client.emails.send({
      from: fromEmail,
      to: email,
      subject,
      html,
    });
    return { ok: true };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.warn("Resend welcome email skipped:", msg);
    return { skipped: true };
  }
}