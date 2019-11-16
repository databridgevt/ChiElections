import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.sass'],
})
export class CandidatesComponent implements OnInit, OnDestroy {
  colNum: number;
  layoutChanges$: Observable<BreakpointState>;
  layoutChanges: any;
  filter: string;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.filter = '';
    this.colNum = 3;
    this.layoutChanges$ = this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ]);

    this.layoutChanges = this.layoutChanges$.subscribe(result =>
      this.updateLayout(result),
    );
  }

  ngOnDestroy() {
    this.layoutChanges.unsubscribe();
  }

  updateLayout(result: any): void {
    if (result.breakpoints[Breakpoints.HandsetPortrait]) {
      console.log('Small Screen');
      this.colNum = 1;
    } else {
      console.log('Large Screen');
      this.colNum = 2;
    }
  }

  matchesFilter(name: string) {
    if (this.filter === '') return true;
    return this.filter.includes(name, 0);
  }
}
