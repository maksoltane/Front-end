import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.models"
import { AwsCognitoService } from '../../services/aws-cognito.service';

class userAtho extends User {
  confirmation: string;
  termsConditions: boolean;
}

@Component({
  selector: 'ns-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  userData: userAtho = {} as userAtho;
  errorMessage: string;
  successMessage: string;
  userConfirmed: boolean;
  enAttenteDeConfirmation: boolean = false;
  showAuthentificationPage: boolean = true;
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
        this.showAuthentificationPage = false;
        this.enAttenteDeConfirmation = true;
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
        this.showAuthentificationPage = false;
        console.log('Success Message de amazon:: ', data);
      }
    });
  }

}

