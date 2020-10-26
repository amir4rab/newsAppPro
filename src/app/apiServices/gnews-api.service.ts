import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalDbService, locationData } from '../globalServices/global-db.service';
import { NewsResponse } from '../interfaces/NewsResponse.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GnewsApiService {
  location: string;
  constructor(private http: HttpClient, private globalDb: GlobalDbService){ 

  }
  getNewsData(): Observable<NewsResponse>{
    this.location = this.globalDb.locationObjDataGeter.locationCountryCode;
    return this.http.get<NewsResponse>(`https://gnews.io/api/v4/top-headlines?&country=${this.location}&token=${environment.GNews}`);
  }
  getCashedData(): Observable<NewsResponse>{
    const countryCode = (this.globalDb.locationDataGeter('locationCountryCode')).toLowerCase();
    return this.http.get<NewsResponse>(`../../assets/chashedGnews/${countryCode}News.json`);
    // const countryCode: string = null;
    // switch(countryCode){
    //   case 'de':{
    //     return this.http.get<NewsResponse>('../../assets/chashedGnews/deNews.txt');
    //     break
    //   }
    //   default: {
    //     return this.http.get<NewsResponse>('../../assets/chashedGnews/deNews.txt');
    //     break
    //   }
    // }
  }
}
