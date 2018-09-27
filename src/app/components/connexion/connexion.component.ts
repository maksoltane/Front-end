import { Component } from '@angular/core';
import { User } from '../../models/user.models';
import { Auth } from 'aws-amplify';
import { Location } from '@angular/common';

@Component({
  selector: 'ns-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class LoginComponent {
  userData = {} as User;
  errorMessage: string = null;
  successMessage: string = null;
  validationConnexion = false;

  constructor(private location: Location) {
    //
  }
  onSubmitLogin() {
    this.errorMessage = null;
    this.successMessage = null;

    Auth.signIn(this.userData.email, this.userData.password)
      .then(user => {
        console.log(user);
        this.validationConnexion = true;
        this.location.go('/dashboard');
      })
      .catch(err => {
        console.log(err);
        this.errorMessage = err.message;
      });
    // If MFA is enabled, sign-in should be confirmed with the congirmation code
    // `user` : Return object from Auth.signIn()
    // `code` : Confirmation code
    // `mfaType` : MFA Type e.g. SMS, TOTP.
    //
    // Auth.confirmSignIn(user, code, mfaType)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
  }

}
