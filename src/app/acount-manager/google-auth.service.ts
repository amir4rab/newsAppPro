import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import {  } from '@angular/fire/auth';

import { auth } from 'firebase/app';
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
  
  constructor(private fireAuth: AngularFireAuth) {  }

  loginAuth(): Promise<any>{
    return this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  // loginAutoAuth(credential: AuthCredential): Promise<any>{
  //   return this.fireAuth.signInWithCredential(credential);
  // }
}
