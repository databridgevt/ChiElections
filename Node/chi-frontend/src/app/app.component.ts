import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'chi-frontend';
  opened: boolean;

  ngOnInit() {
    this.opened = false;
  }
}
