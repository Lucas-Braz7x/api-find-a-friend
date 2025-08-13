import type { FastifyReply, FastifyRequest } from "fastify";
import { createAuthBodySchema } from '../validation';
import { authFactory } from '@/http/factory/auth.factory';


export const auth = async (request: FastifyRequest, reply: FastifyReply) => {
  const {
    email,
    password,
  } = createAuthBodySchema.parse(request.body)

  const authService = authFactory();

  const { org } = await authService.handle({
    email,
    password,
  });

  return reply.status(200).send({ org });

}