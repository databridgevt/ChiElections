import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private meta: Meta) {
    this.meta.addTag({
      name: 'description',
      content: 'Engaging the public in election results and data science.',
    });
  }

  ngOnInit() {}
}
