import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CognitoIdentity, CognitoIdentityCredentials, CognitoIdentityServiceProvider } from 'aws-sdk';
import * as AWS from 'aws-sdk';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.models';


@Injectable({
  providedIn: 'root',
})
export class AwsCognitoService {
  userPool: CognitoIdentityServiceProvider;

  constructor() {
    AWS.config.region = environment.awsRegion;
    const poolData: any = {
      UserPoolId: environment.cognitoPoolId,
      ClientId: environment.cognitoClientId
    };
    this.userPool = new CognitoIdentityServiceProvider(poolData);
  }

  /**
   *
   *
   * @param {User} userData
   * @param {*} callback
   *
   * @memberOf ApiService
   */
  public signUp(userData: User, callback: any): void {

    const signupRequest = {
      ClientId: environment.cognitoClientId, /* required */
      Password: userData.password, /* required */
      Username: userData.email, /* required */
      UserAttributes: [
        {
          Name: 'email', /* required */
          Value: userData.email
        },
      ],
    };
    this.userPool.signUp(signupRequest, (err, data) => {
      callback(err, data);
    });
  }
  /**
   *
   *
   * @param {User} userData
   * @param {*} callback
   *
   * @memberOf ApiService
   */
  public confirmSignup(userData: User, callback: any): void {
    const params = {
      ClientId: environment.cognitoClientId, /* required */
      ConfirmationCode: userData.confirmationCode, /* required */
      Username: userData.email, /* required */
    };
    this.userPool.confirmSignUp(params, function (err, data) {
      callback(err, data);
    });
  }
  public signIn(userData: User, callback: any): void {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH', /* required */
      ClientId: environment.cognitoClientId, /* required */
      AuthParameters: {
        'USERNAME': userData.email,
        'PASSWORD': userData.password
      }
    };
    console.log(params);
    this.userPool.initiateAuth(params, (err, data) => {
      callback(err, data);
    });
  }
}
