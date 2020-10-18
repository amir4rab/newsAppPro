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
  constructor(private http: HttpClient, private globalDbService: GlobalDbService){  }
  getNewsData(): Observable<NewsResponse>{
    this.location = this.globalDbService.locationDataGeter('locationCountryCode');
    return this.http.get<NewsResponse>(`https://gnews.io/api/v4/top-headlines?&country=de&token=${environment.GNews}`);
  }
  getCashedData(): Observable<NewsResponse>{
    const country = this.globalDbService.locationDataGeter('locationCountryCode');
    switch(country.toLowerCase()){
      case 'de':{
        return this.http.get<NewsResponse>('../../assets/chashedGnews/deNews.txt');
        break
      }
    }
  }
}
