import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgSwitch,NgSwitchCase],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
 show=true;

 students=["Anil","sam","peter","vinay"];
 
 studentsData=[
  {
    name:'anil',
    age:29,
    email:'anil@test.com'
  },
  {
    name:'sunil',
    age:26,
    email:'sunil@test.com'
  },
  {
    name:'anthony',
    age:28,
    email:'anthony@test.com'
  }
 ];
 login=false;
 color="blue";


}
