// This specifies the schema of an election in a way that
// provides useful metadata to NestJS at runtime.
// It is essentially exactly the same as the schema.

import { CreateCandidateDTO } from './create-candidate.dto';
import { WardFields } from '../interface/election.interface';


export class CreateElectionDTO {
  year: number;
  candidates: Array<CreateCandidateDTO>;
  wards: Array<WardFields>;
}
