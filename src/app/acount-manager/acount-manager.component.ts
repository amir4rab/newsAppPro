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
  token: string;
  constructor(private googleAuthService: GoogleAuthService, private globalDb: GlobalDbService) { }

  ngOnInit(): void {
    this.logedIn = this.globalDb.userLogedin;
  }

  loginBtn(): void{
    this.googleAuthService.loginAuth().then( res => {
      this.logedIn = true;
      this.globalDb.userLogedin = this.logedIn;
      this.token = res.credential;
      console.log(res);
      this.globalDb.userData = {
        name: res.user.name,
        email: res.user.email,
        userId: res.user.uid
      }
    }).catch(err => console.warn(err));
  }
}
