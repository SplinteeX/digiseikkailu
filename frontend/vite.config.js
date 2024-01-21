import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

export default ({ command }) => {
  if (command === "server") {
    return defineConfig({
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
  } else {
    return defineConfig({
      plugins: [react()],
    });
  }
};
