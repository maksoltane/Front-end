import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';




@Injectable({
  providedIn: 'root',
})
export class AwsCognitoService {

  constructor() {
    //
  }

  public getUserConnected() {
    this.isAuthenticated();
  }
  public async getCurrentAuthenticatedUser() {
    return await Auth.currentAuthenticatedUser();
  }
  public isAuthenticated() {
    console.log('isAuthenticated');
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log('user', user);
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
