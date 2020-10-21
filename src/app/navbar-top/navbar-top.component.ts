import { Component, OnInit } from '@angular/core';
import { GlobalDbService } from '../globalServices/global-db.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {
  pageCheck: boolean = false;
  getWeather: boolean = false;
  activeRout: string = 'home';
  lastActiveRout: string = null;
  constructor(private globalDb: GlobalDbService) { }

  ngOnInit(): void {

    this.globalDb.activeRout.subscribe(page => {
      if(this.lastActiveRout !== page){
        this.activeRout = page;
        this.lastActiveRout = page;
  
        if (page === 'home'){
          this.globalDb.loading.next(true);
          this.pageCheck = true;
        }else{
          this.pageCheck = false;
        }
      }
    });
  }
  get cityName(): string{
    this.getWeather = true;
    return this.globalDb.locationObjDataGeter.locationCity;
  }
}
