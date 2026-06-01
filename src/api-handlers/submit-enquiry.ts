import { ZodError } from "zod";

import { enquiryFormSchema } from "../lib/enquiry-schema";
import { insertLead } from "../lib/mongodb";
import { sendLeadNotification } from "../lib/mail";

export async function handleSubmitEnquiry(body: unknown): Promise<{ ok: true }> {
  const data = enquiryFormSchema.parse(body);

  if (data.website?.trim()) {
    return { ok: true };
  }

  const email = data.email?.trim() || undefined;
  const lead = {
    name: data.name.trim(),
    phone: data.phone.trim(),
    email,
    budget: data.budget?.trim() || undefined,
    message: data.message?.trim() || undefined,
    source: data.source,
  };

  await insertLead(lead);

  try {
    await sendLeadNotification(lead);
  } catch (emailError) {
    console.error("Lead saved but email failed:", emailError);
  }

  return { ok: true };
}

export function getSubmitEnquiryErrorStatus(error: unknown): number {
  if (error instanceof ZodError) {
    return 400;
  }
  return 500;
}
