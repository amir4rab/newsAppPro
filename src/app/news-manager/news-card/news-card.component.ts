import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  newsTestObj = {
    'author': "dpa",
    'content': "Der Verwaltungsgerichtshof in Baden-Württemberg hat mit Beschluss vom Donnerstag einem Eilantrag gegen das Beherbergungsverbot in dem Bundesland stattgegeben. Dieses gilt bislang für Gäste aus deutsc… [+1812 chars]",
    'description': "Der Verwaltungsgerichtshof in Baden-Württemberg hat einem Eilantrag gegen das Beherbergungsverbot in dem Bundesland stattgegeben. Das Land habe nicht darlegen können, dass Hotels „Treiber“ des Infektionsgeschehens seien.",
    'publishedAt': "2020-10-15T10:10:00Z",
    'source': {id: null, name: "Faz.net"},
    'title': "Gericht kippt Beherbergungsverbot in Baden-Württemberg - FAZ - Frankfurter Allgemeine Zeitung",
    'url': "https://www.faz.net/aktuell/gericht-kippt-beherbergungsverbot-in-baden-wuerttemberg-17003054.html",
    'urlToImage': "https://media0.faz.net/ppmedia/aktuell/295665532/1.7003098/facebook_teaser/ein-hotel-in-der-stuttgarter.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
