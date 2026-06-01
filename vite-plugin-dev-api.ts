import type { Plugin } from "vite";

export function devApiPlugin(): Plugin {
  return {
    name: "sunshine-dev-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/api/submit-enquiry") {
          return next();
        }

        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        const chunks: Buffer[] = [];
        req.on("data", (chunk: Buffer) => chunks.push(chunk));
        req.on("end", async () => {
          try {
            const { handleSubmitEnquiry, getSubmitEnquiryErrorStatus } =
              await import("./src/api-handlers/submit-enquiry");
            const body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const result = await handleSubmitEnquiry(body);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result));
          } catch (error) {
            const status = getSubmitEnquiryErrorStatus(error);
            console.error("submit-enquiry error:", error);
            res.statusCode = status;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                error: status === 400 ? "Invalid form data" : "Something went wrong",
              }),
            );
          }
        });
      });
    },
  };
}
