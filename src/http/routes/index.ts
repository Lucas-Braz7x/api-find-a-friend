import { FastifyInstance } from "fastify";
import { petsRouter } from '../controller/pets/routes';


export async function appRoutes(app: FastifyInstance) {
  await app.register(petsRouter, {prefix: '/pet'});
}
