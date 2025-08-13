import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryOrgRepository } from '@/http/repository/in-memory/org.repository';
import { AuthService } from '.';
import { randomUUID } from 'node:crypto';
import { hash } from 'bcryptjs';

let inMemoryDatabaseRepository: InMemoryOrgRepository;

let sut: AuthService;

describe("Auth Service", () => {
  beforeEach(() => {
    inMemoryDatabaseRepository = new InMemoryOrgRepository();

    sut = new AuthService(inMemoryDatabaseRepository);
  });

  it("Deve ser possível se autenticar como uma ORG", async () => {

    const password_hash = await hash("password", 6);

    inMemoryDatabaseRepository.create({
      id: randomUUID(),
      name: "Nova org",
      city: "Areal",
      phone: "2221-2530",
      address: "Travessa",
      email: "org@gmail.com",
      description: "Focada no bem estar social",
      password_hash,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    const { org } = await sut.handle({email: "org@gmail.com", password: "password"})

    expect(org.id).toEqual(expect.any(String));
  });

  it("Não deve ser possível se autenticar como uma ORG com a senha errada", async () => {

    const password_hash = await hash("password", 6);

    inMemoryDatabaseRepository.create({
      id: randomUUID(),
      name: "Nova org",
      city: "Areal",
      phone: "2221-2530",
      address: "Travessa",
      email: "org@gmail.com",
      description: "Focada no bem estar social",
      password_hash,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await expect(() =>
      sut.handle({email: "org@gmail.com", password: "123456"})
      
    ).rejects.toBeInstanceOf(Error);
  });

  it("Não deve ser possível se autenticar como uma ORG que não existe", async () => {

    await expect(() =>
      sut.handle({email: "org@gmail.com", password: "123456"})
      
    ).rejects.toBeInstanceOf(Error);
  });
})