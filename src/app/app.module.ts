import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      { path: '', component: LoginComponent },
    ])
     ],
  declarations: [ AppComponent, HelloComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
