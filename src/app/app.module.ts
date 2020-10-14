import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsManagerComponent } from './news-manager/news-manager.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarSecComponent } from './navbar-sec/navbar-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsManagerComponent,
    NavbarTopComponent,
    NavbarSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
