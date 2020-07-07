import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface LoginData {
  username: string,
  password: string
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {

  inProgress: boolean;

  //TODO Interface for data parameter
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) private data: LoginData,
  ) {}

  ngOnInit() {
    this.inProgress = false;
  }

  async login(): Promise<any> {
    this.inProgress = true;
    console.log(this.data)
    if (environment.development)
      await this.sleep(1500);
    this.inProgress = false;
    this.dialogRef.close();
  }

  sendLogin(): Observable<any> {
    return this.http.post(environment.api + 'login', this.data, httpOptions);
  }

  register(): void {
    this.dialogRef.close();
  }

  //Sleep helper
  //! For demo only
  sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
}
