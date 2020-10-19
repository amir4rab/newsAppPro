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

  //** setting for page loading animation **//
  userLogedin: boolean = false;
  userData: {
    name: string;
    email: string;
    userId: string;
  } = null;

  //** setting for page loading animation **//
  loading = new BehaviorSubject<boolean>(false);
  set loadingState(state: boolean){
    if(state === true){
      this.loading.next(true);
    }else{
      this.loading.next(false);
    }
  }

  //** setting for Api not being avilable **//
  useingOfflineCashedData = new BehaviorSubject<boolean>(false);
  set offlineCashedDataState(state: boolean){
    if(state === true){
      this.useingOfflineCashedData.next(true);
      console.log('Offline Cashed mood!');
    }else{
      this.useingOfflineCashedData.next(false);
    }
  }

  //** setting for cashing Api data in page Changes **//
  activeRout = new Subject<string>();
  
  //** setting for cashing Api data in page Changes **//
  cashedData: {
    newsData: newsArray | null,
    weatherData: WeatherResponse | null,
  } = {
    newsData: null,
    weatherData: null,
  };

  //** setting for Storing Data that used in Application **//
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

    //** Default settings **//
    this.locarionDataSeter('Berlin', 'locationCity');
    this.locarionDataSeter('germany', 'locationCountry');
    this.locarionDataSeter('de', 'locationCountryCode');

  }

  //** Chaning location **//
  locarionDataSeter(input: string, locationType: LocationTypes): void{
    this.locationData[locationType] = input;
    switch(locationType){
      case 'locationCountry': {
        this.cashedData.newsData = null;
        break
      }
      case 'locationCountryCode': {
        this.cashedData.newsData = null;
        break
      }
      case 'locationCity': {
        this.cashedData.weatherData = null;
        break
      }
    }
  }

  //** Chaning location **//
  set locarionCountrySeter(country: string){
    this.locationData.locationCountryCode = this.cDb.dataBaseData[country].iso;
    this.locationData.locationCountry = country;
    this.cashedData.newsData = null;
  }


  
  //** Resiving hole Location Obj **//
  locationObjDataGeter(): object{
    return this.locationData;
  }

  //** Resetting hole location data **//
  get locationSpData(): {
    locationCity: string,
    locationCountry: string,
    locationCountryCode: string,
  }{
    return this.locationData;
  }

  //** Resetting part of location data **//
  locationDataGeter(locationType: LocationTypes): string{
    return this.locationData[locationType];
  }

}
