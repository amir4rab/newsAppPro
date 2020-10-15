import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../apiServices/weather-api.service';


@Component({
  selector: 'app-weather-manager',
  templateUrl: './weather-manager.component.html',
  styleUrls: ['./weather-manager.component.scss']
})
export class WeatherManagerComponent implements OnInit {
  temp: number;
  status: string;
  feelsLike: number;
  constructor(private weatherApi: WeatherApiService) { }

  ngOnInit(): void {
    this.weatherApi.getData().subscribe(res => {
      this.temp = +res.main.temp.toFixed(0);
      this.status = res.weather[0].description;
      this.feelsLike = +res.main.feels_like.toFixed(0);
    }, err =>{
      console.warn(err);
    })
  }

}
