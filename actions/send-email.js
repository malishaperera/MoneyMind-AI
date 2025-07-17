import { Resend } from "resend";
import EmailTemplate from "@/emails/template";

export async function sendEmail({ to, subject, react }) {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const data = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });
  } catch (error) {
    console.log("Failed to send email:", error);
    return { success: false, error };
  }
}
