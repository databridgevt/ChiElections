import { Injectable, NestMiddleware } from '@nestjs/common';
import {
  PrecinctFields,
  WardFields,
} from '../interface/election.interface';
import { CreateElectionDTO } from '../dto/create-election.dto';

@Injectable()
export class TranslateCsvMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const csv: string = Object.keys(req.body)[0]; //? Why do I have to get the keys

    //const csv: string = req.body

    // Destructure rows
    const [headers, parties, offices, districts, ...votes] = csv
      .split('\n')
      .map(line => line.split(','));

    // Create an Array containing objects for each candidate
    const candidates = headers.slice(5);
    const parsedCandidates = candidates.map((candidate, index) => ({
      name: candidate,
      // I sliced off the front of the candidates array
      // +5 to account for the sliced entries
      party: parties[index + 5],
      office: offices[index + 5],

      // Optionally insert a 'district' property if the candidate
      // is an alderman
      ...(offices[index + 5] === 'Alderman' && {
        district: parseInt(districts[index + 5]),
      }),
    }));

    const parsedWards = votes.map((line, i) => {
      // The current ward should be i+1
      const currentWard = i + 1;

      const parsedPrecincts = votes
        .filter(line => parseInt(line[2]) === currentWard)
        .map(line => {
          return {
            precinct: parseInt(line[3]),
            totalBallots: parseInt(line[4]),

            votesCast: line
              .slice(5)                         // Take off the
                                                // entries used above
              .filter(vote => vote !== '')      // filter out empty strings
              .map((vote, j) => ({              // map to object with
                name: candidates[j],            // the given property and
                candidateVotes: parseInt(vote), // parse the int
              })), 
            
            
            other: [], // TODO for now
          } as PrecinctFields;
        });
      // Put the ward together and return
      return {
        ward: currentWard,
        precincts: parsedPrecincts,
      } as WardFields;
    });

    const year = parseInt(votes[0][1]);

    // TODO parse 'other' fields

    // Build the election DTO

    const createElectionDTO: CreateElectionDTO = {
      year: year,
      candidates: parsedCandidates,
      wards: parsedWards,
    };

    // Modify the Request
    req.headers['Content-Type'] = 'application/json';
    req.body = createElectionDTO;

    next();

  }
}
