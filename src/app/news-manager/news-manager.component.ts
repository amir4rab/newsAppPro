import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../apiServices/news-api.service';
import { news } from '../interfaces/NewsResponse.interface';

@Component({
  selector: 'app-news-manager',
  templateUrl: './news-manager.component.html',
  styleUrls: ['./news-manager.component.scss']
})
export class NewsManagerComponent implements OnInit {
  newsArr: news[];
  constructor(private newsApi: NewsApiService) { }

  ngOnInit(): void {
    this.newsApi.getNewsData().subscribe( res => {
      console.log(res);
      this.newsArr = res.articles;
    }, err => {
      console.warn(err);
    });
  }

}