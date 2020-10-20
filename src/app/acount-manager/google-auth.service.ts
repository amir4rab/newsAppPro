import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFireDatabase } from '@angular/fire/database';

import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';

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
  
  constructor(private fireAuth: AngularFireAuth, private fireDatabase: AngularFireDatabase) { 
    // this.fireAuth.setPersistence('local');
  }

  loginAuth(): Promise<any>{
    return this.fireAuth.setPersistence('local').then(_=>{ 
      return this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
    })
  }

  signoutAuth(): void{
    this.fireAuth.signOut().then(res=>console.log(res))
  }
  // loginAutoAuth(credential: AuthCredential): Promise<any>{
  //   return this.fireAuth.signInWithCredential(credential);
  // }

  setData(rawData: object, uId: string): void{
    const itemRef = this.fireDatabase.object(uId);
    const data = {...rawData}
    itemRef.set(data).then(res => console.log('fireDatabase has been used')).catch(err => console.warn(err));
  }

  checkForLogin(): Observable<User>{
    return this.fireAuth.user;
  }
}
