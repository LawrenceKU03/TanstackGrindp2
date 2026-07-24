import { defineConfig, env } from 'prisma/config'
import { config } from "dotenv";
config({ path: ".env.local" });   // explicit path instead of the default "dotenv/config"


export default defineConfig({
  schema: './prisma/schema.prisma',
  migrations: {
    path: './prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
})
