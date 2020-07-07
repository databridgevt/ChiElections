import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private api_url = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  retrieveElection(electionQuery): Observable<any> {
    //Build query String    
    let query_url = this.api_url + `?${electionQuery.inputYear ? electionQuery.inputYear + '&' : ''}${electionQuery.inputParty ? electionQuery.inputParty + '&' : ''}${electionQuery.inputCandidate ? electionQuery.inputCandidate + '&' : ''}${electionQuery.inputWard ? electionQuery.inputWard + '&' : ''}${electionQuery.inputPrecinct ? electionQuery.inputPrecinct + '&' : ''}`;

    // Return http result
    return this.http.get(query_url);
  }
}
