import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-grouping',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './form-grouping.component.html',
  styleUrl: './form-grouping.component.css'
})
export class FormGroupingComponent {

  profileForm= new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.maxLength(50)])
  })
  onSubmit(){
    console.log(this.profileForm.value);
  }

  get name(){
    return this.profileForm.get('name');
  }

  get password(){
    return this.profileForm.get('password');
  }

  get email(){
    return this.profileForm.get('email');
  }

  // setValue(){
  //   this.profileForm.setValue(
  //     {
  //       name:'peter',
  //       password:"321",
  //       email:"anil@test.com"
  //     }
  //   )
  // }

}
