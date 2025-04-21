import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.css'
})
export class EventHandlingComponent {

  handleEvent(event : Event){
    console.log(event)
    console.log(event.type)
    if(event.target){
    console.log((event.target as HTMLInputElement).value)
    }
  }
}
