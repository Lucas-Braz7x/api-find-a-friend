import { FastifyInstance } from "fastify";
import { create } from "./create.controller";
import { verifyJwt, verifyUserRole } from '@/http/middleware';
import { list } from './list.controller';

export const petsRouter = async (app: FastifyInstance) => {
  app.get("/:city/:query", list)
  app.post("/",  { onRequest: [verifyJwt, verifyUserRole("ADMIN")] }, create)
};
