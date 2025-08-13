
import { orgFactory } from '@/http/factory';
import type { FastifyReply, FastifyRequest } from "fastify";
import { createOrgBodySchema } from '../validation';


export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  const {
    name,
    city,
    phone,
    address,
    email,
    description,
    password,
  } = createOrgBodySchema.parse(request.body);

  const petService = orgFactory();

  const { org } = await petService.create({
    name,
    city,
    phone,
    address,
    email,
    description,
    password,
  });

  return reply.status(200).send({ org });
};
