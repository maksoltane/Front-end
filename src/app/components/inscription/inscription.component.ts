import { Component } from '@angular/core';
import { User } from '../../models/user.models';
import Amplify, { Auth } from 'aws-amplify';

class UserAtho extends User {
  confirmation: string;
  termsConditions: boolean;
}

@Component({
  selector: 'ns-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  userData: UserAtho = {} as UserAtho;
  errorMessage: string;
  successMessage: string;
  userConfirmed: boolean;
  confirmationInscription = false;
  validationInscription = false;
  constructor() {

  }
  onSubmitInscription() {
    console.log('test');
    this.errorMessage = null;
    this.successMessage = null;
    Auth.signUp({
      username: this.userData.email,
      password: this.userData.password,
      attributes: {
        email: this.userData.email,
      },
      validationData: [],
    })
      .then(data => {
        this.validationInscription = true;
      })
      .catch(err => {
        this.errorMessage = err.message;
      });
  }

  public onSubmitValidation() {
    // After retrieveing the confirmation code from the user
    Auth.confirmSignUp(this.userData.email, this.userData.confirmationCode, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    }).then(data => {
      console.log(data);
      this.confirmationInscription = true;
    })
      .catch(err => {
        console.log(err);
      });
  }

}

