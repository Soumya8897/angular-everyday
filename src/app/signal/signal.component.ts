import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
//  count =signal(10);
//  x=20;

//  constructor(){
//   effect(()=>{
//     console.log(this.count());
//   })
//  }

//  updateValue(val:string){
//   if(val == 'inc'){
//     this.count.set(this.count()+1);
//   }else{
//     this.count.set(this.count()-1);
//   }
//  }
// data = signal<number | string>(10)
// updateSignal(){
//   this.data.set("hello")
// }
x= signal(10);
y=signal(20);
z=computed(() => this.x()+this.y())

showValue(){
  console.log(this.z());// 30
  this.x.set(100);
  console.log(this.z());//40
}
}
