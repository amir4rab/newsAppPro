import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../interfaces/WeatherResponse.interface';
import { GlobalDbService } from '../globalServices/global-db.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  unit: 'metric' | 'imperial' = 'metric';
  location: string = null;
  constructor(private http: HttpClient, private globalDb: GlobalDbService) {
  }

  getData(): Observable<WeatherResponse>{
    console.log(`Openweathermap api has been called!`,this.location);
    this.location = this.globalDb.locationObjDataGeter.locationCity;
    return  this.http.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=${this.unit}&appid=${environment.openweathermapKey}`);
  }
}
