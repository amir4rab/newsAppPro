import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDbService } from '../globalServices/global-db.service';
type appPages = 'home' | 'settings' | 'acount';
@Component({
  selector: 'app-navbar-sec',
  templateUrl: './navbar-sec.component.html',
  styleUrls: ['./navbar-sec.component.scss']
})
export class NavbarSecComponent implements OnInit {
  activePage:appPages = 'home';
  constructor(private router: Router, private globalDb: GlobalDbService) {
  }

  ngOnInit(): void {
    this.getUrl();
  }

  setActivePage(page: appPages): void{
    this.activePage = page;
    this.globalDb.activeRout.next(page);
    
    if(page === 'home'){
      this.router.navigate(['']);
      return;
    }
    
    this.router.navigate([page]);
  }

  getUrl(): void{
    setTimeout(_=>{
      switch(this.router.url){
        case '/': {
          this.activePage = 'home';
          this.globalDb.activeRout.next('home');
          console.log('/')
          break
        }
        case '/acount':{
          this.activePage = 'acount';
          this.globalDb.activeRout.next('acount');
          break
        }
        case '/settings':{
          this.activePage = 'settings';
          this.globalDb.activeRout.next('settings');
          break
        }
      }
    },1);
  }
}
