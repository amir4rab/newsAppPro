import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';

import { GlobalDbService } from '../globalServices/global-db.service';
import { User } from 'firebase';

@Component({
  selector: 'app-acount-manager',
  templateUrl: './acount-manager.component.html',
  styleUrls: ['./acount-manager.component.scss']
})
export class AcountManagerComponent implements OnInit {
  logedIn: boolean = false;
  loading: boolean = true;
  constructor(private authService: GoogleAuthService, private globalDb: GlobalDbService) { }

  ngOnInit(): void {
    this.authService.checkForLogin().subscribe( res => {
      if ( res !== null && !this.logedIn ) {
        this.setUserData(res);

        this.loading = false;

      } else {

        this.loading = false;
      }
    }, err => {
      this.loading = false;
    });
    this.logedIn = this.globalDb.userLogedin;
  }

  loginBtn(): void{
    this.authService.loginAuth().then( res => {
      this.setUserData(res);
    }).catch(err => console.warn(err));
  }
  
  setUserData ( userData: User ): void {
    console.log(userData);

    this.logedIn = true;
    this.globalDb.userLogedin = this.logedIn;

    this.globalDb.userData = {
      name: userData.displayName,
      email: userData.email,
      userId: userData.uid
    }


  }
  // setData(): void{
  //   this.authService.setData({da:"das"});
  // }
  logout(): void{
    this.authService.signoutAuth();
    this.globalDb.userData = null;
    this.logedIn = false;
  }
}
