import * as mongoose from 'mongoose';

export const ElectionSchema = new mongoose.Schema({
  year: Number,
  candidates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Candidate',
    },
  ],
  wards: [
    {
      ward: Number,
      precincts: [
        {
          precinct: Number,
          totalBallots: Number,
          votesCast: [
            {
              candidate: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Candidate',
              },
              candidateVotes: Number,
            },
          ],
          // Meant to handle awkward fields in some ledgers
          // Like Gender data
          // TODO uses Mixed Schema type to represent this
          other: [
            {
              fieldName: String,
              entries: [
                {
                  // ? There's gotta be a better way to name this
                  number: Number,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
