import { expect, describe, it, beforeEach } from "vitest";
import { PetService } from '.';
import { InMemoryPetRepository } from '@/http/repository/in-memory/pet.repository';

let inMemoryUserDatabaseRepository: InMemoryPetRepository;

let sut: PetService;

describe("Pet Service", () => {
  beforeEach(() => {
    inMemoryUserDatabaseRepository = new InMemoryPetRepository();

    sut = new PetService(inMemoryUserDatabaseRepository);
  });

  it("Deve ser possível cadastrar um pet", async () => {
    const { pet } = await sut.create({
      name: "Joazinho",
      description: "Fofinho, bonitinho",
      city: 'Petrópolis',
      idOrg: "teste"
    })

    expect(pet.id).toEqual(expect.any(String));
  });

  it("Deve ser possível procurar por um pet", async () => {
    const { pet } = await sut.create({
      name: "Joazinho",
      description: "Fofinho, bonitinho",
      city: 'Petrópolis',
      idOrg: "teste"
    })

    const {pet: uniquePet} = await sut.findById(pet.id)

    
    expect(uniquePet?.id).toEqual(expect.any(String));
  });
  
  it("Deve retornar null se um id não for encontrado", async () => {
    
    const {pet: uniquePet} = await sut.findById("qualquer id")
    
    expect(uniquePet).toBe(null);
  });

   it("Deve ser possível listar os pets por cidade", async () => {
    await sut.create({
      name: "Joazinho",
      description: "Fofinho, bonitinho",
      city: 'Petrópolis',
      idOrg: "teste"
    })

    await sut.create({
      name: "Manelzinho",
      description: "Fofinho, bonitinho, brilhante",
      city: 'Petrópolis',
      idOrg: "teste"
    })

    const { pets } = await sut.findManyByCity("Petrópolis")

    
    expect(pets).toHaveLength(2);
    expect(pets).toEqual([
      expect.objectContaining({ name: "Joazinho" }),
      expect.objectContaining({ name: "Manelzinho" }),
    ]);
  });
  
});
