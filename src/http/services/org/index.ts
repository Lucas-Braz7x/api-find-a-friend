import { BaseOrgRepository } from '@/http/repository/dto/base-org-repository';
import { hash } from 'bcryptjs';

interface RequestCreateOrg {
  name: string;
  city: string;
  phone: string;
  address: string;
  email: string;
  description: string;
  password: string;
}


export class OrgService {
  constructor(private orgRepository: BaseOrgRepository) {}

  async create(data: RequestCreateOrg){

    const {
      name,
      city,
      phone,
      address,
      email,
      description,
      password
    } = data

    const password_hash = await hash(password, 6)


    const org = await this.orgRepository.create({
      name,
      city,
      phone,
      address,
      email,
      description,
      password_hash,
    })

    return { org }
  }

  async findByEmail(email: string){
    const org = await this.orgRepository.findByEmail(email)

    return { org }
  }

}