import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalDbService } from '../globalServices/global-db.service';
import { NewsResponse } from '../interfaces/NewsResponse.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  location: string;
  constructor(private http: HttpClient, private globalDbService: GlobalDbService){  }
  getNewsData(): Observable<NewsResponse>{
    this.location = this.globalDbService.locationDataGeter('locationCountryCode');
    return this.http.get<NewsResponse>(`http://newsapi.org/v2/top-headlines?country=${this.location}&apiKey=${environment.newsapiKey}`);
  }
}
