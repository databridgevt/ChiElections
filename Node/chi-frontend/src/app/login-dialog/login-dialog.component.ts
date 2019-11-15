import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.sass'],
})
export class LoginDialogComponent implements OnInit {

  inProgress: boolean;

  //TODO Interface for data parameter
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    this.inProgress = false;
  }

  async login(): Promise<any> {
    this.inProgress = true;
    await this.sleep(1500);
    this.inProgress = false;
    this.dialogRef.close();
  }

  register(): void {
    this.dialogRef.close();
  }


  //Sleep helper
  //! For demo only
  sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
}
