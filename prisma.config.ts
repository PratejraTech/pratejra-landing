// Prisma will load environment variables from `.env` automatically when running CLI commands.
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // CI/build environments often don't provide DATABASE_URL. Prisma still needs a
    // datasource URL to generate the client, so we default to a local SQLite file.
    url: process.env.DATABASE_URL ?? "file:./dev.db",
  },
});
