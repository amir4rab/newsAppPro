import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GoogleAuthService } from '../acount-manager/google-auth.service';

import { newsArray } from '../interfaces/NewsResponse.interface';
import { WeatherResponse } from '../interfaces/WeatherResponse.interface';
import { CountryDbService } from './country-db.service';

type LocationTypes = 'locationCity' | 'locationCountry' | 'locationCountryCode';

export type userObjData = {
  'displayName': string,
  'email': string,
  'uId': string,
  'locationData': locationData
}
export type locationData = {
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
  userDataHasBeenChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _userData: userObjData = {
    'displayName': null,
    'email': null,
    'uId': null,
    'locationData':{
      'locationCity': null,
      'locationCountry': null,
      'locationCountryCode': null,
    }
  };
  get userDataGet(): userObjData{
    return this._userData;
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
  cashedData: { newsData: newsArray | null , weatherData: WeatherResponse | null } = { newsData: null , weatherData: null };

  constructor(private cDb: CountryDbService) {
    this._userData = this.retrieveUserDataFromSorage();
    console.log('pass here!');
  }

  //** Changing location **//
  locarionDataSeter(input: string, locationType: userObjValues, toLocal: boolean = true): void{
    console.log(this._userData.locationData.locationCity, input);
    this._userData.locationData[locationType] = input;

    if (toLocal) {
      console.log('to local')
      this.editLoalData(locationType, input, true);
    }

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
    this._userData.locationData.locationCountryCode = this.cDb.dataBaseData[country].iso;
    
    this._userData.locationData.locationCountry = country;
    
    this.cashedData.newsData = null;

    this.editLoalDatas([
      {changedValue: 'locationCountry', nValue: country },
      {changedValue: 'locationCountryCode', nValue: this.cDb.dataBaseData[country].iso }
    ], true);
  }


  
  //** Resiving hole Location Obj **//
  get locationObjDataGeter(): locationData{
    return this._userData.locationData;
  }

  //** Resetting hole location data **//
  get locationSpData(): locationData{
    return this._userData.locationData;
  }

  //** Resetting part of location data **//
  locationDataGeter(locationType: LocationTypes): string{
    return this._userData[locationType];
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
    let userLocalData = JSON.parse(localData);

    if( userLocalData !== null && userLocalData.locationData.locationCity === null ){
      this.locarionDataSeter(userLocalData.locationCity, 'locationCity', false);
      this.locarionDataSeter(userLocalData.locationCountry, 'locationCountry', false);
      this.locarionDataSeter(userLocalData.locationCountryCode, 'locationCountryCode', false);
      this._userData = userLocalData;
    } else if ( userLocalData !== null && userLocalData.locationCity !== null  ) {
      this._userData = userLocalData;
    } else if ( userLocalData === null ){
      userLocalData = this.initLocalStorage();
    } else {
      userLocalData = this.initLocalStorage();
    }

    return userLocalData;
  }

  //** Editing user data in Localstorage **//
  editLoalData(changedValue: userObjValues, nValue: string, isLocation:boolean = false): void{
    const data: userObjData  = this.retrieveUserDataFromSorage();
    if ( !isLocation ) {
      data[changedValue] = nValue;
    } else {
      data.locationData[changedValue] = nValue;
    }
    this._userData = data;
    this.setUserDataToStorage(data);
  }

  //** Editing user datas in Localstorage **//
  editLoalDatas(dataArr: {changedValue: userObjValues, nValue: string}[], isLocation: boolean = false): void{
    const data: userObjData  = this.retrieveUserDataFromSorage();
    dataArr.forEach(change => {
      if(isLocation){
        data.locationData[change.changedValue] = change.nValue;
      } else {
        data[change.changedValue] = change.nValue;
      }
      this._userData[change.changedValue] = change.nValue;
    });
    this.setUserDataToStorage(data);
  }

  //** Init local data **/
  initLocalStorage(): userObjData{
    //** Default settings **//
    const defaultValues = {
      'displayName': null,
      'email': null,
      'uId': null,
      locationData:{
        'locationCity': 'Berlin',
        'locationCountry': 'germany',
        'locationCountryCode': 'de',
      }
    }
    localStorage.setItem('userdata',JSON.stringify(defaultValues));
    return defaultValues;
  }

  initLocalDataFromCloud(data: userObjData): void{
    this._userData = data;
    localStorage.setItem('userdata',JSON.stringify(data));
  }
}
