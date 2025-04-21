import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set',
  imports: [],
  templateUrl: './get-set.component.html',
  styleUrl: './get-set.component.css'
})
export class GetSetComponent {
  name ="";
  displayName="";
  email="";
  getName(event : Event){
    const name= (event.target as HTMLInputElement).value;
    this.name= name;
  }
  showName(){
    this.displayName = this.name;
  }
  setName(){
    this.name ="Sam" 
  }
  getEmail(val :string){
    this.email=val;
  }
  setEmail(){
    this.email="default@gmail.com";
  }
}
