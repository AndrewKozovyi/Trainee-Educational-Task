import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-finished-day-alert',
  imports: [],
  templateUrl: './finished-day-alert.html',
  styleUrl: './finished-day-alert.scss'
})
export class FinishedDayAlert {
  constructor(
    private dialogRef: MatDialogRef<FinishedDayAlert>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  onClose() {
    this.dialogRef.close();
  }
}
