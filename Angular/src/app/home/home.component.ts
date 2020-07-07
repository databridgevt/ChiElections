import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private meta: Meta, private http: HttpClient) {
    this.meta.addTag({
      name: 'description',
      content: 'Engaging the public in election results and data science.',
    });
  }

  ngOnInit() { this.healthcheck() }
  

  private api_url = 'http://localhost:3000/api/healthcheck'

  healthcheck() {
    console.log('Checking...')
    this.http.get(this.api_url).subscribe().unsubscribe()
  }
}
