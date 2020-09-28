import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  /*firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;*/
  constructor() {}
  /*constructor(private _formBuilder: FormBuilder) { }*/

  ngOnInit(): void {
    /*this.firstFormGroup = this._formBuilder.group({
      emailId: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      createPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
    });
    this.thirdFormGroup = this._formBuilder.group({
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });*/
  }

}
