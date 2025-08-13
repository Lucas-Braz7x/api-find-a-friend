import z from 'zod';

 export const createPetBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    city: z.string(),
    idOrg: z.string(),
  });