import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherApiService } from '../apiServices/weather-api.service';
import { GlobalDbService } from '../globalServices/global-db.service';

@Component({
  selector: 'app-weather-manager',
  templateUrl: './weather-manager.component.html',
  styleUrls: ['./weather-manager.component.scss']
})
export class WeatherManagerComponent implements OnInit {
  temp: number;
  status: string;
  feelsLike: number;
  loadingStage: Observable<boolean>;
  constructor(private weatherApi: WeatherApiService, private globalDb: GlobalDbService) { 
    // this.globalDb.loading.next(true);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    if ( this.globalDb.cashedData.weatherData === null ) {     
      this.weatherApi.getData().subscribe(res => {
        this.temp = +res.main.temp.toFixed(0);
        this.status = res.weather[0].description;
        this.feelsLike = +res.main.feels_like.toFixed(0);
        this.globalDb.loading.next(false);
        this.globalDb.cashedData.weatherData = res;
      }, err =>{
        console.warn(err);
      })
    } else {
      const cashedData = this.globalDb.cashedData.weatherData;
      this.temp = +cashedData.main.temp.toFixed(0);
      this.status = cashedData.weather[0].description;
      this.feelsLike = +cashedData.main.feels_like.toFixed(0);
      setTimeout(_=>this.globalDb.loading.next(false),1);
    }
  }
}
