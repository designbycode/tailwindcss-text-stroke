import { resolve } from "path"
import { defineConfig } from "vitest/config"
import dts from "vite-plugin-dts"

export default defineConfig({
  test: {
    // @ts-expect-error
    coverage: {
      reporter: ["json-summary", "text"],
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "Tailwindcss Text Stroke",
      // the proper extensions will be added
      fileName: "index",
      formats: ["es", "cjs", "umd"],
    },
    minify: "terser",
    rollupOptions: {
      external: ["tailwindcss", "postcss"],
      output: {
        globals: {
          tailwindcss: "tailwindcss",
          postcss: "postcss"
        }
      }
    }
  },
  plugins: [dts()],
})
