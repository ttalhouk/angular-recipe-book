import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  constructor(private router:Router){}
  token:string;

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {

      })
      .catch((error) => {
        console.log(error)
      })
  }
  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then((token) => {
            this.token = token;
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
      .then((token) => {
        this.token = token;
      });
    return this.token;
  }
  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthenticated(){
    return this.token != null;
  }
}
