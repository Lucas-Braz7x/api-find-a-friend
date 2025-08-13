import { FastifyInstance } from "fastify";
import { create } from "./create.controller";
import { verifyJwt, verifyUserRole } from '@/http/middleware';

export const petsRouter = async (app: FastifyInstance) => {
  app.post("/",  { onRequest: [verifyJwt, verifyUserRole("ADMIN")] }, create)
};
