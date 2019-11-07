import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'chi-frontend';
  //Store the state of the sidenav
  opened: boolean;

  //Store the twitter fontawesome icon
  faTwitter = faTwitter

  constructor(breakpointObserver: BreakpointObserver) {
    //Add breakpoints here
  }


  ngOnInit() {
    this.opened = true;
  }
}
