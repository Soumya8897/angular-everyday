import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { ProductService } from '../service/product.service';
import { ProductData } from '../product-model';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {

    productData:ProductData[]=[];
    constructor(private productService:ProductService){
      
    }
    getProductData(){
      this.productData=this.productService.getProductData();
      console.log(this.productData)
    }
}
