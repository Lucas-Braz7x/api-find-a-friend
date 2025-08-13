import type { BaseOrgRepository } from '@/http/repository/dto/base-org-repository';
import { Org,  } from "@prisma/client";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  org: Org;
}

export class AuthService {
  constructor(private org: BaseOrgRepository) {}

  async handle({ email, password }: AuthRequest): Promise<AuthResponse> {
    const org = await this.org.findByEmail(email)

    if (!org) {
      throw new Error("Credenciais inválidas");
    }

    const doesPasswordMatches = await compare(password, org.password_hash);

    if (!doesPasswordMatches) {
      throw new Error("Credenciais inválidas");
    }

    return { org };
  }
}
