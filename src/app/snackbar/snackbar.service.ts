import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  // basic snackbar pop up (temporary)
  showSnackbar(message: string, timeInSeconds?: number) {
    timeInSeconds ? timeInSeconds *= 1000 : timeInSeconds = 3000;
    this.snackBar.open(message, 'Close', {
      duration: (timeInSeconds),
    });
  }
}
