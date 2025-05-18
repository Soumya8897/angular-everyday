import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  imports: [FormsModule,NgIf],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {

  userDetails:any;
  addDetails(val:NgForm){
    console.log(val)
   this.userDetails=val;
  }

}
