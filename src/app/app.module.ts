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
import { SettingsManagerComponent } from './settings-manager/settings-manager.component';
import { AcountManagerComponent } from './acount-manager/acount-manager.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    LoadingDisplayComponent,
    SettingsManagerComponent,
    AcountManagerComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
