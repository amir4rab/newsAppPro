import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalDbService } from './globalServices/global-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsapp';
  loading: boolean;
  constructor(private globalDb: GlobalDbService, private http: HttpClient){
    globalDb.loading.subscribe(res=>{
      this.loading = res;
    });
  }
}
