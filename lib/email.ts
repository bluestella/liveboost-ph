// Env usage disabled to avoid UI conflicts during MVP polish.
// const resendApiKey = process.env.RESEND_API_KEY;
// const adminEmail = process.env.ADMIN_EMAIL;
// const fromEmail = process.env.FROM_EMAIL || "hello@liveboostph.com";
const resendApiKey = undefined;
const adminEmail = undefined;
const fromEmail = "hello@liveboostph.com";

export async function sendAdminNotification(email: string, source: string): Promise<{ skipped: true }> {
  // Temporarily disabled email sending.
  return { skipped: true };
}

export async function sendWelcomeEmail(email: string): Promise<{ skipped: true }> {
  // Temporarily disabled email sending.
  return { skipped: true };
}