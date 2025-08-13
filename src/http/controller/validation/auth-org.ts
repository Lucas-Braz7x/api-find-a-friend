import z from 'zod';

export const createAuthBodySchema = z.object({  
  email: z.string(),
  password: z.string(),
})