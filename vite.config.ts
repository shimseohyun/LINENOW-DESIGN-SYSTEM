import path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // "@apis": path.resolve(__dirname, "src/apis"),
      "@atoms": path.resolve(__dirname, "src/atoms"),
      "@components": path.resolve(__dirname, "src/components"),
      // "@constants": path.resolve(__dirname, "src/constants"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      // "@layouts": path.resolve(__dirname, "src/layouts"),
      "@linenow-types": path.resolve(__dirname, "src/lib/types"),
      "@interfaces": path.resolve(__dirname, "src/lib/interfaces"),
      // "@pages": path.resolve(__dirname, "src/pages"),
      // "@routes": path.resolve(__dirname, "src/routes"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "styled-components", "jotai"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [dts()],
});
