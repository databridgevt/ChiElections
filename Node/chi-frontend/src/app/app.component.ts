import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'chi-frontend';
  opened: boolean;

  constructor(breakpointObserver: BreakpointObserver) {
    //Add breakpoints here
  }


  ngOnInit() {
    this.opened = true;
  }
}
