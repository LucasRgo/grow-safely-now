import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: "/",
    server: {
        host: "::",
        port: 8080,
        allowedHosts: ["beloved-barnacle-smart.ngrok-free.app", "LucasRgo.github.io", "protocoloantiperda.com.br"],
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
