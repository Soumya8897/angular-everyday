import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-two-way',
  imports: [FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css'
})
export class TwoWayComponent {
name_user='anil'

// changeName(event:Event){
//   this.name=(event.target as HTMLInputElement).value;
// }
}
