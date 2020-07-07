import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ElectionService } from '../election.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
  
  displayedColumns: string[] = ['Year', 'Name', 'Ward', 'Precinct', 'Vote'];
  dataSource = new MatTableDataSource<any>(ELECTION_DATA);

  // QueryForm Inputs
  inputYear = undefined;
  inputParty = undefined;
  inputCandidate = undefined;
  inputWard = undefined;
  inputPrecinct = undefined;

  constructor(private electionService: ElectionService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  search() {
    // Build query object
    const electionQuery = {inputYear: this.inputYear, inputParty: this.inputParty, inputCandidate: this.inputCandidate, inputWard: this.inputWard, inputPrecinct: this.inputPrecinct}
    
    const newElectionData = []
    this.electionService.retrieveElection(electionQuery).subscribe(election => newElectionData.push(election))

    // Re-displaying will need testing after backend changes
    this.dataSource = new MatTableDataSource(newElectionData)
  }

}


// Old Baked-in Data

export interface Election {
  year: number;
  name: string;
  ward: number;
  precinct: number;
  vote: number;
}

const ELECTION_DATA: Election[] = [
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 1, vote: 238,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 2, vote: 493,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 3, vote: 483,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 4, vote: 110,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 5, vote: 536,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 6, vote: 777,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 7, vote: 277,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 8, vote: 646,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 9, vote: 341,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 10, vote: 19,
  },
  {
    year: 1983, name: 'Harold Washington', ward: 1, precinct: 11, vote: 30,
  },
]
