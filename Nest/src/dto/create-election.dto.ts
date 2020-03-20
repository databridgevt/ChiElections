// This specifies the schema of an election in a way that
// provides useful metadata to NestJS at runtime.
// It is essentially exactly the same as the schema.

import { CreateCandidateDTO } from './create-candidate.dto';

export interface OtherFields {
  fieldName: string;
  entries: [
    {
      // ? There's gotta be a better way to name this
      number: number;
    },
  ];
}

export interface PrecinctFields {
  precinct: number;
  totalBallots: number;
  votesCast: Array<{ name: string; candidateVotes: number }>;
  other: Array<OtherFields>;
}

export interface WardFields {
  ward: number;
  precincts: Array<PrecinctFields>;
}

export class CreateElectionDTO {
  year: number;
  candidates: Array<CreateCandidateDTO>;
  wards: Array<WardFields>;
}
