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
import { RoutingComponent } from './routing/routing.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormGroupingComponent } from './form-grouping/form-grouping.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ClientComponent } from './client/client.component';
import { ReuseComponent } from './reuse/reuse.component';
import { CustomerComponent } from './customer/customer.component';
import { BusinessComponent } from './business/business.component';
import { CurrencyConverterPipe } from './currency-converter.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,SignupComponent,TwoWayComponent,DirectivesComponent,RoutingComponent,FormGroupingComponent,TemplateFormsComponent,ClientComponent,LifecycleComponent,CurrencyConverterPipe],
  templateUrl: './app.component.html', //interpolation is done only in the file given in this url
  styleUrl: './app.component.css'
})
export class AppComponent {

  //  userName ="Bruce"
   
  //    onUserChange(user:string){
  //     this.userName=user;
  //    }

   amount=10;
   
   




  // title = 'angulat-tut';
  // inside class we cannot make thse variables with let or const because these come under class properties
  // user1='soumya';
  // user2 =' rama';

  // name :string | number= "Soumya";
  // other = true

  // handleClickEvent(){
  //   alert("func called");
    // this.otherFunction(); // because the function is contained in this class.
  
  // otherFunction(){
  //     this.name=34;
  // }

  // sum(a:number,b:number){
  //   alert(a+b);
  // }
}
