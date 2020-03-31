import * as mongoose from 'mongoose';

// TODO Update documents with wikipedia scrape
// This is all I'll be able to find when parsing CSVs
// But the candidates component of the site needs images
// And blurbs on these candidates
export const CandidateSchema = new mongoose.Schema({
  name: {type: String, required: true},
  party: {type: String, required: true},
  office: {type: String, required: true},
});

export const candidateModel = mongoose.model('Candidate', CandidateSchema);