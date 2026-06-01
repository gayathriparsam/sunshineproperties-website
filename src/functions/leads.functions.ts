import { createServerFn } from "@tanstack/react-start";

import { handleSubmitEnquiry } from "@/api-handlers/submit-enquiry";
import { enquiryFormSchema, type EnquiryFormInput } from "@/lib/enquiry-schema";

/** @deprecated Prefer POST /api/submit-enquiry (Vercel + local dev). Kept for Lovable/Cloudflare. */
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: EnquiryFormInput) => enquiryFormSchema.parse(data))
  .handler(async ({ data }) => handleSubmitEnquiry(data));
