// Env usage disabled to avoid UI conflicts during MVP polish.
// const resendApiKey = process.env.RESEND_API_KEY;
// const adminEmail = process.env.ADMIN_EMAIL;
// const fromEmail = process.env.FROM_EMAIL || "hello@liveboostph.com";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function sendAdminNotification(_email: string, _source: string): Promise<{ skipped: true }> {
  // Temporarily disabled email sending.
  return { skipped: true };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function sendWelcomeEmail(_email: string): Promise<{ skipped: true }> {
  // Temporarily disabled email sending.
  return { skipped: true };
}