import { PetRepository } from '../repository';
import { PetService } from '../services/pet';

export const petFactory = () => new PetService(new PetRepository())