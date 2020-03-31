import * as mongoose from 'mongoose';

export const ElectionSchema = new mongoose.Schema({
  year: { type: { type: Number, required: true } },
  candidates: [
    {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Candidate',
      },
    },
  ],
  wards: {
    type: {
      type: [
        {
          ward: { type: { type: Number, required: true } },
          precincts: [
            {
              precinct: Number,
              totalBallots: Number,
              votesCast: [
                {
                  candidate: {
                    type: {
                      type: mongoose.Schema.Types.ObjectId,
                      required: true,
                      ref: 'Candidate',
                    },
                  },
                  candidateVotes: Number,
                },
              ],
              // Meant to handle awkward fields in some ledgers
              // Like Gender data
              // TODO uses Mixed Schema type to represent this
              other: [
                {
                  fieldName: { type: { type: String, required: true } },
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
      required: true,
    },
  },
});

// These hard baked models are used just for testing.
export const electionModel = mongoose.model('Election', ElectionSchema);
