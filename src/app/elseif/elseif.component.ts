import { Component } from '@angular/core';

@Component({
  selector: 'app-elseif',
  imports: [],
  templateUrl: './elseif.component.html',
  styleUrl: './elseif.component.css'
})
export class ElseifComponent {

  color =2
  handleColor(val:number){
    this.color=val;
  }

  
}
