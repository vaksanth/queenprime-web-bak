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
  showForm1:any=true;
  showForm2:any=false;  
  showForm3:any=false;
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
  showFirstForm()
  {
    this.showForm1=true;
    this.showForm2=false;
    this.showForm3=false;
   
  }
  showSecondForm(){
    this.showForm1=false;
    this.showForm3=false;
    this.showForm2=true;
  }

  showThirdForm(){
    this.showForm1=false;
    this.showForm2=false;
    this.showForm3=true;
  }
  

}
