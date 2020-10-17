import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
type appPages = 'home' | 'settings' | 'acount';
@Component({
  selector: 'app-navbar-sec',
  templateUrl: './navbar-sec.component.html',
  styleUrls: ['./navbar-sec.component.scss']
})
export class NavbarSecComponent implements OnInit {
  activePage:appPages = 'home';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getUrl();
  }
  setActivePage(page: appPages): void{
    this.activePage = page;
    
    if(page === 'home'){
      this.router.navigate(['']);
      return;
    }
    this.router.navigate([page]).then(_=>console.log(this.router.url));
  }
  getUrl(): void{
    setTimeout(_=>{
      switch(this.router.url){
        case '/': {
          this.activePage = 'home';
          break
        }
        case '/acount':{
          this.activePage = 'acount';
          break
        }
        case '/settings':{
          this.activePage = 'settings';
          break
        }
      }
    },1);
  }
}
