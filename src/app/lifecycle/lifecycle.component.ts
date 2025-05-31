import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { ProductService } from '../service/product.service';
import { ProductData } from '../product-model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {

     posts:any;
    // productData:ProductData[]=[];
    constructor(private userService:UsersService){
      
    }
    ngOnInit(){
      this.userService.getPosts().subscribe((data:any)=>{
        this.posts=data;
        console.log(this.posts)
      })
    }
    // getProductData(){
    //   this.productData=this.productService.getProductData();
    //   console.log(this.productData)
    // }
}
