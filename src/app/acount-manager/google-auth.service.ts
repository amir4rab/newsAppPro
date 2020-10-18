import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  
  constructor(private fireAuth: AngularFireAuth) {  }

  loginAuth(): Promise<any>{
    return this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
