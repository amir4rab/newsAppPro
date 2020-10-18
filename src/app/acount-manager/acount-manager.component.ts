import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';

import { GlobalDbService } from '../globalServices/global-db.service';

@Component({
  selector: 'app-acount-manager',
  templateUrl: './acount-manager.component.html',
  styleUrls: ['./acount-manager.component.scss']
})
export class AcountManagerComponent implements OnInit {
  logedIn: boolean = false;
  constructor(private googleAuthService: GoogleAuthService, private globalDb: GlobalDbService) { }

  ngOnInit(): void {
    this.logedIn = this.globalDb.userLogedin;
  }

  loginBtn(): void{
    this.googleAuthService.loginAuth().then( res => {
      this.logedIn = true;
      this.globalDb.userLogedin = this.logedIn;
      console.log(res);
    }).catch(err => console.warn(err));
  }
}
