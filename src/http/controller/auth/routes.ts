import { FastifyInstance } from "fastify";
import { auth } from './auth.controller';

export const authRouter = async (app: FastifyInstance) => {
  app.post("/", auth)
};
