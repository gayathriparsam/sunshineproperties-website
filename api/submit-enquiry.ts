import type { VercelRequest, VercelResponse } from "@vercel/node";

import {
  getSubmitEnquiryErrorStatus,
  handleSubmitEnquiry,
} from "../src/api-handlers/submit-enquiry";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const result = await handleSubmitEnquiry(req.body);
    return res.status(200).json(result);
  } catch (error) {
    const status = getSubmitEnquiryErrorStatus(error);
    console.error("submit-enquiry error:", error);
    return res.status(status).json({
      error: status === 400 ? "Invalid form data" : "Something went wrong",
    });
  }
}
