import { constants } from '../constants';
import { Model } from 'mongoose';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateElectionDTO } from '../dto/create-election.dto';
import { CreateCandidateDTO } from '../dto/create-candidate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Election } from 'src/interface/election.interface';
import { Candidate } from 'src/interface/candidate.interface';

@Injectable()
export class ElectionService {
  constructor(
    @InjectModel('Election')
    private readonly electionModel: Model<Election>,
    @InjectModel('Candidate')
    private readonly candidateModel: Model<Candidate>,
  ) {}

  async createElection(createElectionDTO: CreateElectionDTO): Promise<Election> {
    // Save each of the candidates first
    const promisedCandidates = createElectionDTO.candidates.map(
      createCandidateDTO => new this.candidateModel(createCandidateDTO).save(),
    );

    // Wait on each candidate to finish saving
    let savedCandidates;
    try {
      savedCandidates = await Promise.all(promisedCandidates);
    } catch (err) {
      // Some candidate couldn't be store in the db
      throw new InternalServerErrorException('Failed to Save Candidates');
    }

    // Replace references in createElectionDTO to match election schema
    const newElection = {
      year: createElectionDTO.year,
      candidates: savedCandidates.map(candidate => candidate._id),
      wards: createElectionDTO.wards.forEach(ward => ({
        ward: ward.ward,
        precincts: ward.precincts.forEach(precinct => ({
          precinct: precinct.precinct,
          totalBallots: precinct.totalBallots,
          votesCast: precinct.votesCast.forEach(vote => ({
            // At this point, if I inject the DB connection,
            // I could search for the candidate names but
            // this works too
            // For each ward and precinct, I need to modify the
            // votes array to store the correct candidate id
            candidate: savedCandidates.filter(
              candidate => candidate.name === vote.name,
            )[0]._id,
            candidateVotes: vote.candidateVotes
          })),
        })),
      })),
    };

    //Create a model from the built election
    const createdElection = new this.electionModel(newElection);

    //Return the Promise created by saving a new model
    return createdElection.save();
  }
}
