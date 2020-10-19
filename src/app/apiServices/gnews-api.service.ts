import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalDbService } from '../globalServices/global-db.service';
import { NewsResponse } from '../interfaces/NewsResponse.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GnewsApiService {
  location: string;
  constructor(private http: HttpClient, private globalDb: GlobalDbService){  }
  getNewsData(): Observable<NewsResponse>{
    console.log('Gnews Api has been Called!');
    this.location = this.globalDb.locationDataGeter('locationCountryCode');
    return this.http.get<NewsResponse>(`https://gnews.io/api/v4/top-headlines?&country=${this.location}&token=${environment.GNews}`);
  }
  getCashedData(): Observable<NewsResponse>{
    const country = this.globalDb.locationDataGeter('locationCountryCode');
    switch(country.toLowerCase()){
      case 'de':{
        return this.http.get<NewsResponse>('../../assets/chashedGnews/deNews.txt');
        break
      }
    }
  }
}
