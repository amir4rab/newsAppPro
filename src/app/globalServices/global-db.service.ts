import { Injectable } from '@angular/core';

import { newsArray } from '../interfaces/NewsResponse.interface';
import { WeatherResponse } from '../interfaces/WeatherResponse.interface';
import { CountryDbService } from './country-db.service';

type LocationTypes = 'locationCity' | 'locationCountry' | 'locationCountryCode';

@Injectable({
  providedIn: 'root'
})
export class GlobalDbService {
  private acitvePage: 'home' | 'setting' = 'home';
  cashedData: {
    newsData: newsArray,
    weatherData: WeatherResponse,
  } = {
    newsData: null,
    weatherData: null,
  };
  private locationData: {
    locationCity: string,
    locationCountry: string,
    locationCountryCode: string,
  } = {
    locationCity: null,
    locationCountry: null,
    locationCountryCode: null,
  };

  constructor(private cDb: CountryDbService) {
    this.locarionDataSeter('Berlin', 'locationCity');
    this.locarionDataSeter('germany', 'locationCountry');
    this.locarionDataSeter('de', 'locationCountryCode');
    console.log(this.cDb.germanyCities);
  }

  locarionDataSeter(input: string, locationType: LocationTypes): void{
    this.locationData[locationType] = input;
  }
  locationObjDataGeter(): object{
    return this.locationData;
  }
  get locationSpData(): {
    locationCity: string,
    locationCountry: string,
    locationCountryCode: string,
  }{
    return this.locationData;
  }
  locationDataGeter(locationType: LocationTypes): string{
    return this.locationData[locationType];
  }
  set activePageState(input: 'home' | 'setting'){
    this.acitvePage = input;
  }
  get activePageState(): 'home' | 'setting'{
    return this.acitvePage;
  }
}
