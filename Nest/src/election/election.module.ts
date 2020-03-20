import { Module } from '@nestjs/common';
// Create and import controller: import {}
import { ElectionService } from './election.service';
import { ElectionController } from './election.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ElectionSchema } from 'src/schema/election.schema';
import { CandidateSchema } from 'src/schema/candidate.schema';

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
  providers: [ElectionService],
})
export class ElectionModule {}
