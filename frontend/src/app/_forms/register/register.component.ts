import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlertService } from '../../_services/alert.service';
import { AuthService } from '../../_services/auth.service';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private auth: AuthService,
    private alert: AlertService,
    private router: Router,
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      gender: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      numcard: ['', Validators.required],
    });
  }

  register() {
    this.auth.register(this.model).subscribe(
      (res)=> this.alert.success('You account has been added succefully !'),
      (error) => this.alert.error('error !')
    );
    this.cancelRegister()
  }

  login() {
    console.log(this.model)
    this.auth.login(this.model).subscribe(
      (response: any) => {
        const token = response ;
        if (token) {
          console.log(token)
          this.alert.success('Logged in succefully ! ');
          this.cancelRegister()
          //  this.router.navigate(['/acceuil']);
      }},
      error => {
        this.alert.error(error.detail)
        this.cancelRegister()
      }
    )
  }

  cancelRegister(): void {
    this.dialogRef.close();
  }
}
