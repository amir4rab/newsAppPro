import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { newsArray } from '../interfaces/NewsResponse.interface';
import { WeatherResponse } from '../interfaces/WeatherResponse.interface';
import { CountryDbService } from './country-db.service';

type LocationTypes = 'locationCity' | 'locationCountry' | 'locationCountryCode';

export type userObjData = {
  'displayName': string,
  'email': string,
  'uId': string,
  'locationCity': string,
  'locationCountry': string,
  'locationCountryCode': string,
}
type userObjValues =  'displayName' | 'email' | 'uId' | 'locationCity' | 'locationCountry' | 'locationCountryCode';

@Injectable({
  providedIn: 'root'
})
export class GlobalDbService {

  //** setting for page loading animation **//
  userLogedin: boolean = false;
  userData = {
    'displayName': null,
    'email': null,
    'uId': null,
    'locationCity': null,
    'locationCountry': null,
    'locationCountryCode': null,
  };

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
    const userLocalData = this.retrieveUserDataFromSorage();
    console.log(userLocalData);
    if( userLocalData !== null ){
      this.locarionDataSeter(userLocalData.locationCity, 'locationCity');
      this.locarionDataSeter(userLocalData.locationCountry, 'locationCountry');
      this.locarionDataSeter(userLocalData.locationCountryCode, 'locationCountryCode');
      this.userData = userLocalData;
    } else {
      //** Default settings **//
      this.setUserDataToStorage({
        'displayName': null,
        'email': null,
        'uId': null,
        'locationCity': null,
        'locationCountry': null,
        'locationCountryCode': null,
      })
      this.locarionDataSeter('Berlin', 'locationCity');
      this.locarionDataSeter('germany', 'locationCountry');
      this.locarionDataSeter('de', 'locationCountryCode');
    }

  }

  //** Chaning location **//
  locarionDataSeter(input: string, locationType: LocationTypes): void{
    this.locationData[locationType] = input;

    this.editLoalData(locationType, input);

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

    this.editLoalDatas([
      {changedValue: 'locationCountry', nValue: country },
      {changedValue: 'locationCountryCode', nValue: this.cDb.dataBaseData[country].iso }
    ]);
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

  //** Setting user data to Localstorage **//
  setUserDataToStorage(data: userObjData): void{
    localStorage.setItem('userdata', JSON.stringify(data));
  }

  //** Remove user data from Localstorage **//
  removeUserDataFromStorage(): void{
    localStorage.removeItem('userdata');
  }

  //** Retrieveing user data from Localstorage **//
  retrieveUserDataFromSorage(): userObjData{
    const localData = localStorage.getItem('userdata');
    const localDataJson = JSON.parse(localData);
    return localDataJson;
  }

  //** Editing user data in Localstorage **//
  editLoalData(changedValue: userObjValues, nValue: string): void{
    const data: userObjData  = this.retrieveUserDataFromSorage();
    data[changedValue] = nValue;
    this.setUserDataToStorage(data);
  }

  //** Editing user datas in Localstorage **//
  editLoalDatas(dataArr: {changedValue: userObjValues, nValue: string}[]): void{
    const data: userObjData  = this.retrieveUserDataFromSorage();
    dataArr.forEach(change => {
      data[change.changedValue] = change.nValue;
    });
    this.setUserDataToStorage(data);
  }
}
