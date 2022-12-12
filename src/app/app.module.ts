import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UserloginComponent } from './userlogin/userlogin.component'

const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"addtask",
    component:AddtaskComponent
  },
  {
    path:"addemployee",
    component:AddemployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminnavbarComponent,
    AddemployeeComponent,
    AddtaskComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
