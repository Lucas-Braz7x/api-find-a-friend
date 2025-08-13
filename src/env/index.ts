import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),
  JWT_SECRET: z.string()
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error(
    "Oh, no!! As variáveis de ambiente não foram configuradas",
    _env.error.format()
  );

  throw new Error("Oh, no!! As variáveis de ambiente nãop foram configuradas");
}

export const env = _env.data;
