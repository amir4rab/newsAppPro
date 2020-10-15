import { Component } from '@angular/core';
import { GlobalDbService } from './globalServices/global-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsapp';
  // constructor(private globalDb: GlobalDbService){
  //   globalDb.loading.subscribe(res=>{
  //     console.log(res);
  //   });
  // }
  // setTrue(): void{
  //   this.globalDb.loadingState = true;
  // }
  // setFalse(): void{
  //   this.globalDb.loadingState = false;
  // }
}
