import { TranslateCsvMiddleware } from './translate-csv.middleware';
import { CreateElectionDTO } from '../dto/create-election.dto';

describe('TranslateCsvMiddleware Compilation', () => {
  it('should be defined', () => {
    expect(new TranslateCsvMiddleware()).toBeDefined();
  });
});

describe('TranslateCsvMiddleware Implementation', () => {
  // The CSV should come through a request body as a plaintext string
  const mockRequest = {
    headers: {
      'Content-Type': 'text/csv',
    },
    //This body is testing the first couple lines of a csv of 1983's general election
    body: `PREC_ID,Year,Ward,Precinct,Total_Ballots,Harold Washington,Bernard E. Epton,Ed Warren,Walter S. Kozubowski,Bettye Whitefield Baldwin,Nicolee E. Brorsen,Cecil A Partee,Christopher Paul Bohus,John Craig Landberg,William Barnett,Bobby Rush,Timothy C. Evans,Toni Reed Preckwinkle
    ,,,,,Democratic,Republican,Sociaist,Democratic,Republican,Socialist,Democratic,Republican,Socialist,,,,
    ,,,,,Mayor,Mayor,Mayor,City Clerk,City Clerk,City Clerk,City Treasurer,City Treasurer,City Treasurer,Alderman,Alderman,Alderman,Aderman
    ,,,,,,,,,,,,,,2,2,4,4
    198301001,1983,1,1,672,399,243,1,445,156,13,465,142,11,,,,
    198301002,1983,1,2,528,493,2,2,470,12,5,481,5,3,,,,`,
  };

  // This middleware should crete dto's and replace the request body
  // Here's the example DTO
  const mock1983DTO: CreateElectionDTO = {
    year: 1983,
    candidates: [
      // There should be more than one candidate parsed,
      // But here's an example
      {
        name: 'Harold Washington',
        party: 'Democratic',
        office: 'Mayor',
      },
    ],
    wards: [
      {
        ward: 1,
        precincts: [
          {
            precinct: 1,
            totalBallots: 672,
            votesCast: [
              {
                name: 'Harold Washington',
                candidateVotes: 399,
              },
              {
                name: 'Bernard E. Epton',
                candidateVotes: 243,
              },
              {
                name: 'Ed Warren',
                candidateVotes: 1,
              },
              {
                name: 'Walter S. Kozubowski',
                candidateVotes: 445,
              },
              {
                name: 'Bettye Whitefield Baldwin',
                candidateVotes: 156,
              },
              {
                name: 'Nicolee E. Brorsen',
                candidateVotes: 13,
              },
              {
                name: 'Cecil A Partee',
                candidateVotes: 465,
              },
              {
                name: 'Christopher Paul Bohus',
                candidateVotes: 142,
              },
              {
                name: 'John Craig Landberg',
                candidateVotes: 11,
              },
            ],
            other: [],
          },
        ],
      },
    ],
  };

  // Set up middleware before all tests
  beforeAll(() => {
    const middleware = new TranslateCsvMiddleware();

    // Use our middleware without a response and an empty 'next' function
    middleware.use(mockRequest, null, () => {});
  });

  it('should parse the correct year', () => {
    expect(mockRequest.body).toBeDefined();

    //Typecast body to our DTO
    const requestBody = (<unknown>mockRequest.body) as CreateElectionDTO;

    expect(requestBody.year).toBe(1983);
  });

  it("should correctly parse Washington's Affiliation", () => {
    //Typecast body to our DTO
    const requestBody = (<unknown>mockRequest.body) as CreateElectionDTO;

    expect(requestBody.candidates[0]).toMatchObject(mock1983DTO.candidates[0]);
  });

  it('should correctly parse one ward/precinct', () => {
    //Typecast body to our DTO
    const requestBody = (<unknown>mockRequest.body) as CreateElectionDTO;

    // NOTE: toMathcObject seems sorta backwards or I don't understand
    // it yet
    const { ward, precincts } = requestBody.wards[0];

    expect(ward).toBe(1);
    expect(precincts[0]).toMatchObject(mock1983DTO.wards[0].precincts[0]);
  });

  it('should modify the request header', () => {
    expect(mockRequest.headers['Content-Type']).toBe('application/json');
  });
});
