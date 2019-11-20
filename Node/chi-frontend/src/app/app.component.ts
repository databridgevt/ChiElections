import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MatDialog } from '@angular/material';
import {
  LoginDialogComponent,
  LoginData,
} from './login-dialog/login-dialog.component';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

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

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.opened = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: { username: this.username, password: this.password },
    });

    dialogRef
      .afterClosed()
      .subscribe()
      .unsubscribe();
  }

  logout(): void {
    this.router.navigate(['/']);
  }
}
