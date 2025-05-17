import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prof',
  imports: [],
  templateUrl: './prof.component.html',
  styleUrl: './prof.component.css'
})
export class ProfComponent {

  userName:string | null="";
  constructor(private route:ActivatedRoute){
      
  }

  ngOnInit(){
  //  let name= this.route.snapshot.paramMap.get('name'); --directly through button navigation

  //  this.userName= name;

  //   this.route.queryParams.subscribe(params=>{
  //   this.userName=params['name'];
  //  })

  // this.route.data.subscribe((data) =>{
  //   this.userName=data['name']
  // }) -- through app.routes file
  }
}
