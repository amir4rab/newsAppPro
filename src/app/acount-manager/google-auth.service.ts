import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFireDatabase } from '@angular/fire/database';

import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';
import { GlobalDbService } from '../globalServices/global-db.service';

interface AuthCredential {
  a: null;
  accessToken: string;
  idToken: string;
  providerId: string;
  signInMethod: string;
}
@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  
  constructor(private fireAuth: AngularFireAuth, private fireDatabase: AngularFireDatabase, private globalDb: GlobalDbService) { 
    // this.fireAuth.setPersistence('local');
  }

  loginAuth(): Promise<any>{
    return this.fireAuth.setPersistence('local').then(_=>{ 
      return this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
    })
  }

  signoutAuth(): void{
    this.fireAuth.signOut().then(res=>console.log(res));
    this.globalDb.removeUserDataFromStorage();
  }
  // loginAutoAuth(credential: AuthCredential): Promise<any>{
  //   return this.fireAuth.signInWithCredential(credential);
  // }

  setData(rawData: object, uId: string): Promise<any>{
    const itemRef = this.fireDatabase.object(uId);
    const data = {...rawData}
    return itemRef.set(data);
  }

  checkForLogin(): Observable<User>{
    return this.fireAuth.user;
  }
}
