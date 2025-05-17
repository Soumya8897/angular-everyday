import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenfComponent } from './pagenf/pagenf.component';
import { ProfComponent } from './prof/prof.component';
import { UserComponent } from './user/user.component';


export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'profile',component:ProfComponent,data:{name:'soum'}
  },
  {path:'user/:id/:name',component:UserComponent},
  {path:'**',component:PagenfComponent}
];
