import { Pet, Prisma  } from "@prisma/client";

export interface BasePetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
  update(id: string, data: Prisma.PetUpdateInput): Promise<Pet>;
  findManyByCity(city: string): Promise<Pet[]>;
  findById(id: string): Promise<Pet | null>;
}
