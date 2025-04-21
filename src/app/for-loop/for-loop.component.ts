import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
    users=['anil','sam','peter','tony','bruce'];
    students=[
      {name: 'Anil',age :30,email:'anil@test.com'},
      {name: 'Sam',age :23,email:'sam@test.com'},
      {name: 'Peter',age :42,email:'peter@test.com'},
      {name: 'Bruce',age :37,email:'anil@test.com'}
    ]

    getName(name:string){
      console.log(name)
    }
}
