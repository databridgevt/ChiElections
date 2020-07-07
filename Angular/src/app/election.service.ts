import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private api_url = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }
}
