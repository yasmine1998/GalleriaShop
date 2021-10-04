import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  Form: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.Form = this._formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
    });
    this.Form = this._formBuilder.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      numcard: ['', Validators.required],
    });
  }

}
