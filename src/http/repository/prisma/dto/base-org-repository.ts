import { Org, Prisma } from '@prisma/client';

export interface BaseOrgRepository {
  create(data: Prisma.OrgCreateInput): Promise<Org>;
}