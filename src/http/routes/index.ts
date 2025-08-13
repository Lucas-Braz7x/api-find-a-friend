import { FastifyInstance } from "fastify";
import { petsRouter } from '../controller/pets/routes';
import { orgsRouter } from '../controller/org/routes';


export async function appRoutes(app: FastifyInstance) {
  await app.register(petsRouter, {prefix: '/pet'});
  await app.register(orgsRouter, {prefix: '/org'});
}
