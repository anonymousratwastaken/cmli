import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "singlestore",
  dbCredentials: {
    url: Deno.env.get("DATABASE_URL")!,
  },
});
