import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(
        "/etc/letsencrypt/live/digiadventurers.com/privkey.pem"
      ),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/digiadventurers.com/fullchain.pem"
      ),
    },
  },
  plugins: [react()],
});
