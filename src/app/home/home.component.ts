import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  users=[
    {
      id:'1',
      name:'anil',
      age:28,
      email:'anil@test.com'
    },
    {
      id:'2',
      name:'peter',
      age:28,
      email:'peter@test.com'
    },
    {
      id:'3',
      name:'sam',
      age:28,
      email:'sam@test.com'
    }
  ]
  // constructor(private router:Router){

  // }

  
  // goToProfile(){
  //     this.router.navigate(['profile'],{queryParams:{name:'soumya'}});
  // }
}
