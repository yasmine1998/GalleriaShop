import { Injectable } from '@angular/core';
import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})


export class AlertService {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  success(message: string) {
    this._snackBar.open(message,'',{
      panelClass: ['green-snackbar']
    });
  }

  error(message: string) {
    this._snackBar.open(message,'',{
      panelClass: ['red-snackbar']
    });
  }
}
