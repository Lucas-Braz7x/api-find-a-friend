import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryPetRepository } from '@/http/repository/in-memory/pet.repository';
import { OrgService } from '.';
import { InMemoryOrgRepository } from '@/http/repository/in-memory/org.repository';

let inMemoryDatabaseRepository: InMemoryOrgRepository;

let sut: OrgService;

describe("ORG Service", () => {
  beforeEach(() => {
    inMemoryDatabaseRepository = new InMemoryOrgRepository();

    sut = new OrgService(inMemoryDatabaseRepository);
  });

  it("Deve ser possível cadastrar uma ORG", async () => {

    const data = {
      name: "Nova org",
      city: "Areal",
      phone: "2221-2530",
      address: "Travessa",
      email: "org@gmail.com",
      description: "Focada no bem estar social",
      password: "123456",
    }

    const { org } = await sut.create(data)

    expect(org.id).toEqual(expect.any(String));
  });
})