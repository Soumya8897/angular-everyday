import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  @Input() user: string = '';
  @Input() city: string = '';
  // Input decorator i used to get the data from parent component


}
