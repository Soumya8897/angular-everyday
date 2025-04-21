import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0;
  handleIncrement() {
    this.count = this.count + 1;
  }
  handleReset() {
    this.count = 0;
  }
  handleDecrement() {
    this.count = this.count - 1;
  }


  handleCounter(val: string) {
    if (val === 'minus') {
      this.count = this.count >0 ?this.count - 1:this.count;
    } else if (val == 'plus') {
      this.count = this.count + 1;
    }
    else {
      this.count = 0;
    }
  }
}
