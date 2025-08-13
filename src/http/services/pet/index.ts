import { BasePetRepository } from '@/http/repository/dto/base-pet-repository';
import { Prisma } from '@prisma/client';



export class PetService {
  constructor(private petRepository: BasePetRepository) {}

  async create({
    name,
    city,
    description,
    idOrg,
  }: Pick<Prisma.PetUncheckedCreateInput, 'name' | 'city' | 'description' | 'idOrg'>){

    const pet = await this.petRepository.create({
      name,
      city,
      description,
      idOrg,
      available: true
    })

    return { pet }
  }

  async findManyByCity(city: string){
    const pets = await this.petRepository.findManyByCity(city)

    return {
      pets
    }
  }

  async findById(id: string){
    const pet = await this.petRepository.findById(id)

    return {
      pet
    }
  }
}