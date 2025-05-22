import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  @Output() getUsers= new EventEmitter();
   users=['Anil','Sam','Peter','Tony']

   loadData(){
    this.getUsers.emit(this.users);
   }
}
