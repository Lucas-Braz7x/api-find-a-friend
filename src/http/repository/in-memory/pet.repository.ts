import { Prisma, Pet } from '@prisma/client';
import { BasePetRepository } from '../dto/base-pet-repository';
import { randomUUID } from "node:crypto";

export class InMemoryPetRepository  implements BasePetRepository{
  public itens: Pet[] = [];

  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {

    const pet: Pet = {
      id: randomUUID(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.itens.push(pet)

    return pet
  }
  async update(id: string, data: Prisma.PetUpdateInput): Promise<Pet> {
      
    const petIndex = this.itens.findIndex(
      (record) => (record.id = id)
    );
    
    if (petIndex >= 0) {
      this.itens[petIndex] = {
        ...this.itens[petIndex] as any,
        ...data,
        updatedAt: new Date
      };
    }

    return this.itens[petIndex];
  }

  async findManyByCity(city: string): Promise<Pet[]> {
    const pets: Pet[] = this.itens.filter(record => record.city === city)

    return pets
  }


  async findById(id: string): Promise<Pet | null> {
    const pet = this.itens.find(record => record.id === id)

     if (!pet) {
      return null;
    }

    return pet
  }
  
}