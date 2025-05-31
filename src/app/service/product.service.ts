import { Injectable } from '@angular/core';
import { ProductData } from '../product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    console.log("product service")
  }

  getProductData():ProductData[]{
    return[
      { name:'mobile',branch:'samsung',price:'2000'},
      {name:'laptop',branch:'dell',price:'20000'},
      {name:'washing machine',branch:'samsung',price:'10000'}
    ]
  }
}
