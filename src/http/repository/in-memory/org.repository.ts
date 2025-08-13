import { Prisma,  Org } from '@prisma/client';
import { randomUUID } from "node:crypto";
import { BaseOrgRepository } from '../dto/base-org-repository';

export class InMemoryOrgRepository  implements BaseOrgRepository{
  public itens: Org[] = [];
  
  async findByEmail(email: string) {
    const org = this.itens.find(record => record.email === email)

    if(!org) {
      return null
    }

    return org
  }

  async create(data: Prisma.OrgUncheckedCreateInput): Promise<Org> {

    const org: Org = {
      id: randomUUID(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.itens.push(org)

    return org
  }
  
}