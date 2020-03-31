import { Document } from 'mongoose';
import { Candidate } from './candidate.interface';

export interface OtherFields {
  readonly fieldName: string;
  readonly entries: [
    {
      // ? There's gotta be a better way to name this
      readonly number: number;
    },
  ];
}

export interface PrecinctFields {
  readonly precinct: number;
  readonly totalBallots: number;
  readonly votesCast: Array<{ name: string; candidateVotes: number }>;
  readonly other: Array<OtherFields>;
}

export interface WardFields {
  readonly ward: number;
  readonly precincts: Array<PrecinctFields>;
}

export interface Election extends Document {
    readonly year: number;
    readonly candidate: Array<Candidate>;
    readonly wards: Array<WardFields>;
}