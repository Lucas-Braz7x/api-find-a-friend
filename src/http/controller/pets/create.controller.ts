
import { petFactory } from '@/http/factory';
import type { FastifyReply, FastifyRequest } from "fastify";
import { createPetBodySchema } from '../validation';


export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  const {name, description, city, idOrg} =
    createPetBodySchema.parse(request.body);

  const petService = petFactory();

  const { pet } = await petService.create({
    name, description, city, idOrg
  });

  return reply.status(200).send({ pet });
};
