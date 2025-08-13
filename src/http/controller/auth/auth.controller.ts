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

  const token = await reply.jwtSign(
    {
      role: "ADMIN",
    },
    {
      sign: {
        sub: org.id,
      },
    }
  );

  const refreshToken = await reply.jwtSign(
    {
        role: "ADMIN",
    },
    {
      sign: {
        sub: org.id,
        expiresIn: "7d",
      },
    }
  );

  return reply
    .setCookie("refreshToken", refreshToken, {
      path: "/",
      secure: true,
      sameSite: true,
      httpOnly: true,
    })
    .status(200)
    .send({ token });

}