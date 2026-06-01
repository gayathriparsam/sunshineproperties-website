// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { devApiPlugin } from "./vite-plugin-dev-api";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
// On Vercel (VERCEL=1), Nitro uses the vercel preset for SSR + routing.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: process.env.VERCEL ? { preset: "vercel" } : undefined,
  vite: {
    plugins: [devApiPlugin()],
  },
});
