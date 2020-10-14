import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../interfaces/WeatherResponse.interface';
import { GlobalDbService } from '../globalServices/global-db.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  unit: 'metric' | 'imperial' = 'metric';
  location: string = null;
  constructor(private http: HttpClient, private GlobalDb: GlobalDbService) {
  }

  getData(): Observable<WeatherResponse>{
    this.location = this.GlobalDb.locationDataGeter('locationCity');
    return  this.http.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=${this.unit}&appid=e669130f4538ca7afd5cabe4cafffc2d`);
  }
}