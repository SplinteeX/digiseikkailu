import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    host: "65.21.156.172",
    port: 443,
  },
  server: {
    https: {
      key: fs.readFileSync(
        "/etc/letsencrypt/live/digiadventures.com/privkey.pem"
      ),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/digiadventures.com/fullchain.pem"
      ),
    },
  },
  plugins: [react()],
});
