import { Component } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-business',
  imports: [CustomerComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
   users:any;
   handleUsers(users:any){
    this.users=users;
  }
}
