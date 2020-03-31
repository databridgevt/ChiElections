import { Test, TestingModule } from '@nestjs/testing';
import { ElectionService } from './election.service';
import { getModelToken } from '@nestjs/mongoose';
import { electionModel } from '../schema/election.schema';
import { candidateModel } from '../schema/candidate.schema';
import { CreateCandidateDTO } from 'src/dto/create-candidate.dto';
import { CreateElectionDTO } from 'src/dto/create-election.dto';
import { InternalServerErrorException } from '@nestjs/common';

describe('ElectionService', () => {
  let service: ElectionService;

  const createCandidateDTO: CreateCandidateDTO = {
    name: 'Harold Washington',
    party: 'Democratic',
    office: 'Mayor',
  };

  const createElectionDTO: CreateElectionDTO = {
    year: 1983,
    candidates: [createCandidateDTO],
    wards: [
      {
        ward: 1,
        precincts: [
          {
            precinct: 1,
            totalBallots: 5,
            votesCast: [
              {
                name: 'Harold Washington',
                candidateVotes: 5,
              },
            ],
            other: [],
          },
        ],
      },
    ],
  };

  const badCreateCandidateDTO = { ...createCandidateDTO };
  delete badCreateCandidateDTO.name;
  const badCreateElectionDTO = createElectionDTO;
  badCreateElectionDTO.candidates[0] = badCreateCandidateDTO;

  const expectedElection = { ...createElectionDTO } as any;
  expectedElection.candidates[0] = { _id: expect.stringMatching(/.*/) };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [],
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

    service = module.get<ElectionService>(ElectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should save an Election', () => {
    return expect(
      service.createElection(createElectionDTO),
    ).resolves.toMatchObject(expectedElection);
  });

  it('should fail on incorrect Candidates', () => {
    return expect(service.createElection(createElectionDTO)).rejects.toMatchObject(
      new InternalServerErrorException()
    );
  });
});
