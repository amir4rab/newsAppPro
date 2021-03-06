import { Component, OnDestroy, OnInit } from '@angular/core';
import { GnewsApiService } from '../apiServices/gnews-api.service';
import { news } from '../interfaces/NewsResponse.interface';
import { GlobalDbService } from '../globalServices/global-db.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-news-manager',
  templateUrl: './news-manager.component.html',
  styleUrls: ['./news-manager.component.scss']
})
export class NewsManagerComponent implements OnInit {
  newsArr: news[];
  offlineCashedMode = false;
  apiDailyLimited = false;
  apiErorr = false;
  loaded = false;

  constructor(private gnews: GnewsApiService, private globalDb: GlobalDbService) { }

  ngOnInit(): void {
    this.globalDb.useingOfflineCashedData.subscribe(res => {
      this.offlineCashedMode = res;
    });

    if ( this.globalDb.cashedData.newsData === null ) {
      if( !this.offlineCashedMode ) {
        this.getOnlineData();
      } else {
        this.getCashedData();
      }
    } else {
      this.newsArr = this.globalDb.cashedData.newsData;
      this.loaded = true;
    }
  }

  getOnlineData(){
    this.gnews.getNewsData().subscribe( res => {
      this.newsArr = res.articles;
      this.globalDb.cashedData.newsData = res.articles;
      this.loaded = true;
    }, err => {
      switch((err.status).toString()){
        case '429':{
          console.log('cashed mode!');
          this.apiDailyLimited = true;
          this.getCashedData();
          break
        }
        case '500':{
          this.apiErorr = true;
          this.getCashedData();
          break
        }
        case '503':{
          this.apiErorr = true;
          this.getCashedData();
          break
        }
        default:{
          this.apiErorr = true;
          this.getCashedData();
        }
      }
      console.warn(err.status);
    });
  }
  getCashedData(){
    this.globalDb.offlineCashedDataState = true;

    this.gnews.getCashedData().subscribe( res => {
      console.log(res);
      this.newsArr = res.articles;
      this.globalDb.cashedData.newsData = res.articles;
      this.loaded = true;
    }, err => {
      console.warn(err);
    });
  }
}