import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// this file determines which component is loaded first.
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
