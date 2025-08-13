import { OrgRepository } from '../repository';
import { OrgService } from '../services/org';


export const orgFactory = () => new OrgService(new OrgRepository())