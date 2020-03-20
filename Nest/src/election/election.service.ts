import { constants } from '../constants';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateElectionDTO } from '../dto/create-election.dto';
import { CreateCandidateDTO } from '../dto/create-candidate.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ElectionService {
  constructor(
    @InjectModel('Election')
    private electionModel: Model<any>, // TODO Create election interface
    @InjectModel('Candidate')
    private candidateModel: Model<any>,
  ) {}

  async createElection(createElectionDTO: CreateElectionDTO): Promise<any> {
    // Save each of the candidates first
    const savedCandidates = createElectionDTO.candidates.map(
      createCandidateDTO => new this.candidateModel(createCandidateDTO).save(),
    );

    // Wait on each candidate to finish saving
    try {
      await Promise.all(savedCandidates);
    } catch (err) {
      // Some candidate couldn't be store in the db
      // TODO Raise a 500
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
