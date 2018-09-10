import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.models';
import { AwsCognitoService } from '../../services/aws-cognito.service';

class UserAtho extends User {
  confirmation: string;
  termsConditions: boolean;
}

@Component({
  selector: 'ns-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  userData: UserAtho = {} as UserAtho;
  errorMessage: string;
  successMessage: string;
  userConfirmed: boolean;
  confirmationInscription = false;
  validationInscription = false;
  constructor(private awsCognitoService: AwsCognitoService, ) {

  }
  onSubmitInscription() {
    console.log("test")
    this.errorMessage = null;
    this.successMessage = null;
    this.awsCognitoService.signUp(this.userData, (err, data) => {
      if (err) {
        this.errorMessage =  err;
        console.log('Error Message de amazon: ', err);
      }
      if (data) {
        this.successMessage = data;
        this.validationInscription = true;
        this.confirmationInscription = false;
        console.log('Success Message de amazon:: ', data);
      }
    });
  }

  onSubmitConfirmation() {
    console.log("test")
    this.errorMessage = null;
    this.successMessage = null;
    this.awsCognitoService.confirmSignup(this.userData, (err, data) => {
      if (err) {
        this.errorMessage =  err;
        console.log('Error Message de amazon: ', err);
      }
      if (data) {
        this.successMessage = data;
        this.validationInscription = false;
        this.confirmationInscription = true;
        console.log('Success Message de amazon:: ', data);
      }
    });
  }

}

