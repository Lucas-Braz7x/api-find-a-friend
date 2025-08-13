import { OrgRepository } from '../repository';
import { AuthService } from '../services/auth';


export const authFactory = () => new AuthService(new OrgRepository())