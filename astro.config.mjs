import { defineConfig, sessionDrivers } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // devToolbar: { enabled: false }
  vite: {
      plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
  // Sessions are not used yet. Explicitly use in-memory storage so the
  // Cloudflare adapter does not auto-enable the SESSION KV binding.
  // When enabling sessions later, switch this to `cloudflare-kv-binding`
  // and add `kv_namespaces` binding in wrangler.jsonc.
  session: {
    driver: sessionDrivers.memory(),
  },
});