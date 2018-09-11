import { Component } from '@angular/core';
import { User } from '../../models/user.models';
//import { AwsCognitoService } from '../../services/aws-cognito.service';
import Amplify, { Auth } from 'aws-amplify';
import "../../../environments/aws-config";

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
  constructor( ) {

  }
  onSubmitInscription() {
    console.log('test');
    this.errorMessage = null;
    this.successMessage = null;
    // this.awsCognitoService.signUp(this.userData, (err, data) => {
    //   if (err) {
    //     this.errorMessage =  err;
    //     console.log('Error Message de amazon: ', err);
    //   }
    //   if (data) {
    //     this.successMessage = data;
    //     this.validationInscription = true;
    //     this.confirmationInscription = false;
    //     console.log('Success Message de amazon:: ', data);
    //   }
    // });

 Auth.signUp({
    username: "makrem.soltane@gmail.com",
    password: "makrem1234M!" ,
    attributes: {
        email:"",          // optional
        phone_number:"",   // optional - E.164 number convention
        // other custom attributes 
    },
    validationData: []  //optional
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  // onSubmitConfirmation() {
  //   console.log('test');
  //   this.errorMessage = null;
  //   this.successMessage = null;
  //   this.awsCognitoService.confirmSignup(this.userData, (err, data) => {
  //     if (err) {
  //       this.errorMessage =  err;
  //       console.log('Error Message de amazon: ', err);
  //     }
  //     if (data) {
  //       this.successMessage = data;
  //       this.validationInscription = false;
  //       this.confirmationInscription = true;
  //       console.log('Success Message de amazon:: ', data);
  //     }
  //   });
  // }

}

