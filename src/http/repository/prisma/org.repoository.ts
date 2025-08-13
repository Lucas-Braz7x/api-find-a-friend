import { Prisma, Org } from '@prisma/client';
import { BaseOrgRepository } from './dto/base-org-repository';
import { prisma } from '@/lib/prisma';

export class OrgRepository implements BaseOrgRepository {
  async create(data: Prisma.OrgCreateInput): Promise<Org> {
    return prisma.org.create({
      data
    })
  }
  
}