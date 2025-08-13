
import { petFactory } from '@/http/factory';
import type { FastifyReply, FastifyRequest } from "fastify";
import { createPetBodySchema } from '../validation';
import z from 'zod';


export const list = async (request: FastifyRequest, reply: FastifyReply) => {
  const checkInParamsSchema = z.object({
    city: z.string(),
    query: z.string().optional().nullable()
  });

  const { city, query } = checkInParamsSchema.parse(request.params);

  console.log({city, query})

  const queryData = query || undefined

  const petService = petFactory();

  const { pets } = await petService.findManyByCity({ city, query: queryData  });

  return reply.status(200).send({ pets });
};
