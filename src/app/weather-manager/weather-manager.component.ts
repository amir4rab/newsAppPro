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

  }

  ngOnInit(): void {
    this.weatherApi.getData().subscribe(res => {
      this.temp = +res.main.temp.toFixed(0);
      this.status = res.weather[0].description;
      this.feelsLike = +res.main.feels_like.toFixed(0);
      this.globalDb.loadingState = false;
    }, err =>{
      console.warn(err);
    })
  }

}
