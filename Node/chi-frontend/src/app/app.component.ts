import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'chi-frontend';
  // Store the state of the sidenav
  opened: boolean;

  // Store the twitter fontawesome icon
  faTwitter = faTwitter;

  // Store the username and password from the login dialog.
  username: string;
  password: string;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public dialog: MatDialog,
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

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {
        username: this.username,
        password: this.password,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
}
