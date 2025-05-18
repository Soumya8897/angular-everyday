import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-reuse',
  imports: [ChildComponent],
  templateUrl: './reuse.component.html',
  styleUrl: './reuse.component.css'
})
export class ReuseComponent {
  users=['Anil','Sam','Peter'];
}
