import { Component, Input, OnInit } from '@angular/core';
import { news } from 'src/app/interfaces/NewsResponse.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() newsObj: news;
  constructor() { }

  ngOnInit(): void {
  }

}
