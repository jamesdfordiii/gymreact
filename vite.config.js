import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // This can be useful in some environments like WSL2
    },
    hmr: {
      protocol: "ws", // Use WebSocket for HMR
      host: "localhost", // Your development host
      port: 3000, // Default port for Vite
    },
  },
});
