import { prisma } from "@/lib/prisma";
import type { Pet, Prisma } from "@prisma/client";
import { BasePetRepository } from "./dto/base-pet-repository";

export class PetRepository implements BasePetRepository {
  constructor() {}

  async update(id: string, data: Prisma.PetUpdateInput): Promise<Pet> {
    return prisma.pet.update({
      where: {
        id
      },
      data
    })
  }

  findManyByCity(city: string): Promise<Pet[]> {
    return prisma.pet.findMany({
      where: {
        city,
        available: true
      }
    })
  }

  async create(data: Prisma.PetUncheckedCreateInput) {
    return prisma.pet.create({
      data,
    });
  }

  async findById(id: string) {
    return prisma.pet.findUnique({
      where: {
        id,
      },
    });
  }
}
