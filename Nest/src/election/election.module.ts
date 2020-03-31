import { Module } from '@nestjs/common';
// Create and import controller: import {}
import { ElectionService } from './election.service';
import { ElectionController } from './election.controller';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { ElectionSchema } from '../schema/election.schema';
import { CandidateSchema } from '../schema/candidate.schema';
import { model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'Election', schema: ElectionSchema },
        { name: 'Candidate', schema: CandidateSchema },
      ],
      'chicago',
    ),
  ],
  controllers: [ElectionController],
  providers: [
    ElectionService,
    {
      provide: getModelToken('Election'),
      useValue: model('Election', ElectionSchema),
    },
    {
      provide: getModelToken('Candidate'),
      useValue: model('Candidate', CandidateSchema),
    },
  ],
})
export class ElectionModule {}
