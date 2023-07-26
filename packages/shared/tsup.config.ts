import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: true,
  treeshake: true,
  clean: true,
  format: "esm",
});
