import { defineConfig } from "vite";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { reactCompilerPreset } from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [
        [
          "@swc/plugin-styled-components",
          {
            displayName: true,
            ssr: true,
          },
        ],
      ],
    }),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
});
