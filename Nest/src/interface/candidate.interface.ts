import { Document } from 'mongoose';

export interface Candidate extends Document {
    readonly name: string;
    readonly party: string;
    readonly office: string;
};
