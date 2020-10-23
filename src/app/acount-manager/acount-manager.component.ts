import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';

import { GlobalDbService, userObjData } from '../globalServices/global-db.service';
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
        this.globalDb.userDataHasBeenChanged.next(true);
        this.loading = false;
      } else {
        this.loading = false;
      }
    }, _ => {
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
        if(res !== null){
          this.globalDb.initLocalDataFromCloud(res);
          this.globalDb.userDataHasBeenChanged.next(true);
        }
      })
    });
  }
  
  setUserData ( userData: User ): void {

    this.globalDb.userLogedin = true;
    this.logedIn = true;

    this.globalDb.editLoalDatas([
      {'changedValue': 'displayName','nValue': userData.displayName},
      {'changedValue': 'email','nValue': userData.email},
      {'changedValue': 'uId','nValue': userData.uid},
    ], false);
    
    this.userdisplayName = userData.displayName;

  }
  
  // setData(): void{
  //   this.authService.setData({da:"das"});
  // }
  
  logout(): void{
    this.globalDb.userLogedin = false;
    this.authService.signoutAuth();
    this.logedIn = false;
  }

  backupData(): void{
    this.backUpCompleted = false;

    this.authService.setUserDataToFireBaseDb(this.globalDb.userDataGet).then(
      res =>{
        this.dataHasBeenSynced = true;
        this.backUpCompleted = true;
        console.log(res)
      }
    )
  }
}
