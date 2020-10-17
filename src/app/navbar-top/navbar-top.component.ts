import { Component, OnInit } from '@angular/core';
import { GlobalDbService } from '../globalServices/global-db.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {
  currentCity: string;
  activeRout: string = 'home';
  constructor(private globalDb: GlobalDbService) { }

  ngOnInit(): void {
    this.currentCity = this.globalDb.locationDataGeter('locationCity');

    this.globalDb.activeRout.subscribe(page => {
      this.activeRout = page;

      if (page === 'home'){
        this.globalDb.loading.next(true);
      }
    });
  }
}
