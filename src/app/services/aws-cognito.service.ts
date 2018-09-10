import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CognitoIdentity, CognitoIdentityCredentials, CognitoIdentityServiceProvider, STS } from 'aws-sdk';
import * as AWS from 'aws-sdk';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.models';
import { AuthenticationDetails, CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import { CognitoCallback, CognitoUtil, LoggedInCallback } from './cognito.service';



@Injectable({
  providedIn: 'root',
})
export class AwsCognitoService {
  userPool: CognitoIdentityServiceProvider;

  constructor(public cognitoUtil: CognitoUtil) {
    AWS.config.region = environment.awsRegion;
    const poolData: any = {
      UserPoolId: environment.cognitoPoolId,
      ClientId: environment.cognitoClientId
    };
    this.userPool = new CognitoIdentityServiceProvider(poolData);
  }

  /**
   * methode qui permet de s'inscrire'à aws cognito
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
   * methode qui permet de confirmer l'inscription à AWS cognito avec un code
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
  /**
   * methode qui permet de se logger à aws cognito
   *
   * @param {User} userData
   * @param {*} callback
   *
   * @memberOf AwsCognitoService
   */
  public signIn(userDataAuth: User, callback: any): void {
    // const params = {
    //   AuthFlow: 'USER_PASSWORD_AUTH', /* required */
    //   ClientId: environment.cognitoClientId, /* required */
    //   AuthParameters: {
    //     'USERNAME': userData.email,
    //     'PASSWORD': userData.password
    //   }
    // };
    // console.log(params);
    // this.userPool.initiateAuth(params, (err, data) => {
    //   callback(err, data);
    // });
    console.log('UserLoginService: starting the authentication');

    const authenticationData = {
        Username: userDataAuth.email,
        Password: userDataAuth.password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
      Username: userDataAuth.email,
      Pool: this.cognitoUtil.getUserPool()
  };
  console.log('UserLoginService: Params set...Authenticating the user');
  const cognitoUser = new CognitoUser(userData);
  console.log('UserLoginService: config is ' + AWS.config);
  cognitoUser.authenticateUser(authenticationDetails, {
    newPasswordRequired: (userAttributes, requiredAttributes) => callback.cognitoCallback(`User needs to set password.`, null),
    onSuccess: result => this.onLoginSuccess(callback, result),
    onFailure: err => this.onLoginError(callback, err),
    mfaRequired: (challengeName, challengeParameters) => {
        callback.handleMFAStep(challengeName, challengeParameters, (confirmationCode: string) => {
            cognitoUser.sendMFACode(confirmationCode, {
                onSuccess: result => this.onLoginSuccess(callback, result),
                onFailure: err => this.onLoginError(callback, err)
            });
        });
    }
});


  }
  private onLoginSuccess = (callback: CognitoCallback, session: CognitoUserSession) => {

    console.log('In authenticateUser onSuccess callback');

    AWS.config.credentials = this.cognitoUtil.buildCognitoCreds(session.getIdToken().getJwtToken());

    // So, when CognitoIdentity authenticates a user, it doesn't actually hand us the IdentityID,
    // used by many of our other handlers. This is handled by some sly underhanded calls to AWS Cognito
    // API's by the SDK itself, automatically when the first AWS SDK request is made that requires our
    // security credentials. The identity is then injected directly into the credentials object.
    // If the first SDK call we make wants to use our IdentityID, we have a
    // chicken and egg problem on our hands. We resolve this problem by "priming" the AWS SDK by calling a
    // very innocuous API call that forces this behavior.
    const clientParams: any = {};
    if (environment.sts_endpoint) {
        clientParams.endpoint = environment.sts_endpoint;
    }
    const sts = new STS(clientParams);
    sts.getCallerIdentity(function (err, data) {
        console.log('UserLoginService: Successfully set the AWS credentials');
      //  callback.cognitoCallback(null, session);
    });
}

private onLoginError = (callback: CognitoCallback, err) => {
  callback.cognitoCallback(err.message, null);
}
}
