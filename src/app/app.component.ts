import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { GetSetComponent } from './get-set/get-set.component';
import { StyleRulesComponent } from './style-rules/style-rules.component';
import { ElseifComponent } from './elseif/elseif.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SignalComponent } from './signal/signal.component';
import { EffectComponent } from './effect/effect.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ToDoComponent } from './to-do/to-do.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,SignupComponent,ProfileComponent,CounterComponent,DynamicStyleComponent,TwoWayComponent,DirectivesComponent],
  templateUrl: './app.component.html', //interpolation is done only in the file given in this url
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulat-tut';
  // inside class we cannot make thse variables with let or const because these come under class properties
  // user1='soumya';
  // user2 =' rama';

  name :string | number= "Soumya";
  other = true

  handleClickEvent(){
    alert("func called");
    // this.otherFunction(); // because the function is contained in this class.
  }
  // otherFunction(){
  //     this.name=34;
  // }

  sum(a:number,b:number){
    alert(a+b);
  }
}
