import z from 'zod';

export const createOrgBodySchema = z.object({  
  name: z.string(),
  city: z.string(),
  phone: z.string(),
  address: z.string(),
  email: z.string(),
  description: z.string(),
  password: z.string(),
})