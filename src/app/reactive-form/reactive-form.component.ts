import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  name=new FormControl('sou');
  password = new FormControl('123');

  displayValue(){
    console.log(this.name.value)
    console.log(this.password.value)
  }
  setValues(){
    this.name.setValue('peter')
    this.password.setValue('124')
  }

}
