import { FastifyInstance } from "fastify";

//import { verifyJwt } from "@/http/middleware/verify-jwt";
import { create } from "./create.controller";

export const petsRouter = async (app: FastifyInstance) => {
  //app.addHook("onRequest", verifyJwt);

  app.post("/",  /* { onRequest: [verifyUserRole("ADMIN")] } */ create)
};
