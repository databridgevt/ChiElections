import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ElectionService } from '../election.service';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
})
export class GraphsComponent implements OnInit {
  displayedColumns: string[] = ['Year', 'Name', 'Ward', 'Precinct', 'Vote'];
  dataSource = new MatTableDataSource<Election>(BLANK_ELECTION_DATA);

  // QueryForm Inputs
  inputYear = 0;
  inputParty = '';
  inputCandidate = '';
  inputWard = 0;
  inputPrecinct = 0;

  candidates = [{ name: 'Washington' }, {name: 'Epton'}]

  constructor(private electionService: ElectionService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  search() {
    
    // Build query object
    const electionQuery = {
      inputYear: this.inputYear,
      inputParty: this.inputParty,
      inputCandidate: this.inputCandidate,
      inputWard: this.inputWard,
      inputPrecinct: this.inputPrecinct,
    };

    let newElectionData = [];
    newElectionData = this.electionService
      .retrieveElection(electionQuery)
    //  .subscribe(election => newElectionData.push(election));

    newElectionData = newElectionData.filter((row) => { return row.year === this.inputYear || row.name === this.inputCandidate || row.party === this.inputWard || row.precinct === this.inputPrecinct});

    // Re-displaying will need testing after backend changes
    //this.dataSource = new MatTableDataSource(newElectionData);
    this.dataSource = new MatTableDataSource(newElectionData)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

const BLANK_ELECTION_DATA: Election[] = [];