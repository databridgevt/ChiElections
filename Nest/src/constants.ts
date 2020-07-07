// This object contains all of the constants used through-out
// this application.

// I'd like to move this over to something similar to the
// 'environments' file in the angular project

export const constants = {
  csvMIMEType: 'text/csv',
  database_connection: 'DATABASE_CONNECTION',
  database_uri: 'mongodb://localhost:27017/chicago', //? why replace 'mongo' with 'localhost'
  election_model: 'ELECTION_MODEL',
  candidate_model: 'CANDIDATE_MODEL',
  port: 3000,
  xlsxMIMEType:
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};
