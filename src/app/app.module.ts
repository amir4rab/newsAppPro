import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsManagerComponent } from './news-manager/news-manager.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarSecComponent } from './navbar-sec/navbar-sec.component';
import { WeatherManagerComponent } from './weather-manager/weather-manager.component';
import { NewsCardComponent } from './news-manager/news-card/news-card.component';
import { ShortenPipe } from './utilities/pipes/shorten.pipe';
import { LoaderAnimationComponent } from './utilities/component/loader-animation/loader-animation.component';
import { LoadingDisplayComponent } from './utilities/component/loading-display/loading-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsManagerComponent,
    NavbarTopComponent,
    NavbarSecComponent,
    WeatherManagerComponent,
    NewsCardComponent,
    ShortenPipe,
    LoaderAnimationComponent,
    LoadingDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
