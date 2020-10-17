import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { newsArray } from '../interfaces/NewsResponse.interface';
import { WeatherResponse } from '../interfaces/WeatherResponse.interface';
import { CountryDbService } from './country-db.service';

type LocationTypes = 'locationCity' | 'locationCountry' | 'locationCountryCode';

@Injectable({
  providedIn: 'root'
})
export class GlobalDbService {
  private acitvePage: 'home' | 'setting' = 'home';


  loading = new BehaviorSubject<boolean>(true);
  set loadingState(state: boolean){
    if(state === true){
      this.loading.next(true);
    }else{
      this.loading.next(false);
    }
  }
  
  useingOfflineCashedData = new BehaviorSubject<boolean>(false);
  set offlineCashedDataState(state: boolean){
    if(state === true){
      this.useingOfflineCashedData.next(true);
      console.log('changed to ' + true);
    }else{
      this.useingOfflineCashedData.next(false);
      console.log('changed to ' + false);
    }
  }

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

    // this.loading.next(false);
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

  // set activePageState(input: 'home' | 'setting'){
  //   this.acitvePage = input;
  // }
  // get activePageState(): 'home' | 'setting'{
  //   return this.acitvePage;
  // }
}
