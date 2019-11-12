import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'chi-frontend';
  //Store the state of the sidenav
  opened: boolean;

  //Store the twitter fontawesome icon
  faTwitter = faTwitter;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.opened = false;
    this.matIconRegistry.addSvgIcon(
      'faTwitter',
      this.domSanitizer.bypassSecurityTrustUrl(
        '../assets/icons/twitter_brands.svg',
      ),
    );
  }
}
