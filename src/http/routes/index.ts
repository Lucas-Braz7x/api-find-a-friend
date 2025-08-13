import { FastifyInstance } from "fastify";
import { petsRouter } from '../controller/pets/routes';
import { orgsRouter } from '../controller/org/routes';
import { authRouter } from '../controller/auth/routes';


export async function appRoutes(app: FastifyInstance) {
  await app.register(authRouter, {prefix: '/auth'});
  await app.register(petsRouter, {prefix: '/pet'});
  await app.register(orgsRouter, {prefix: '/org'});
}
