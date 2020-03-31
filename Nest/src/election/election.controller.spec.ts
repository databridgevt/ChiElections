import { Test, TestingModule } from '@nestjs/testing';
import { ElectionController } from './election.controller';
import { ElectionService } from './election.service';
import { getModelToken } from '@nestjs/mongoose';
import { electionModel } from '../schema/election.schema';
import { candidateModel } from '../schema/candidate.schema';

describe('Election Controller', () => {
  let controller: ElectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectionController],
      providers: [
        ElectionService,
        /* These providers mock the Models used in the service
           Mocking in this way is easier then importing a connection
           (which is made up in the root module), and we don't have to worry about 
           modifying the DB.
        */
        {
          provide: getModelToken('Election'),
          useValue: electionModel,
        },
        {
          provide: getModelToken('Candidate'),
          useValue: candidateModel,
        },
      ],
    }).compile();

    controller = module.get<ElectionController>(ElectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  
});
