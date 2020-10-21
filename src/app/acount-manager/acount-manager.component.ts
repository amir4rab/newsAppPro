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
  backUpCompleted: boolean = true;
  dataHasBeenSynced: boolean = true;
  userdisplayName: string;
  constructor(private authService: GoogleAuthService, public globalDb: GlobalDbService) { }

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

    this.globalDb.userDataHasBeenChanged.subscribe(res=>{
      this.dataHasBeenSynced = res;
    })

    this.logedIn = this.globalDb.userLogedin;
  }

  loginBtn(): void{
    this.authService.loginAuth().then( res => {
      this.setUserData(res.user);

      this.authService.fetchData(res.user.uid).subscribe(res=>{
        if(res === null){
        }
      })
    }).catch(err => console.warn(err));
  }
  
  setUserData ( userData: User ): void {

    this.globalDb.userLogedin = this.logedIn;
    
    this.logedIn = true;
    
    this.globalDb.editLoalDatas([
      {'changedValue': 'displayName','nValue': userData.displayName},
      {'changedValue': 'email','nValue': userData.email},
      {'changedValue': 'uId','nValue': userData.uid},
    ]);
    
    this.userdisplayName = userData.displayName;

  }
  
  // setData(): void{
  //   this.authService.setData({da:"das"});
  // }
  
  logout(): void{
    this.globalDb.userLogedin = false;
    this.authService.signoutAuth();
    this.globalDb.userData = null;
    this.logedIn = false;
  }
}
