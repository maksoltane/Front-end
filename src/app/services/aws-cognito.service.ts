import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AwsCognitoService {

  constructor() {
    //
  }

  /**
   * methode qui permet de verifier si le user est connecté
   *
   * @memberOf AwsCognitoService
   */
  public isAuthenticated() {
    console.log('isAuthenticated');
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log('user', user);
      })
      .then(data => {
        console.log('data', data);
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }



  /**
   * methode qui permet de deconnecter le user de tout les équipements.
   *
   * @memberOf AwsCognitoService
   */
  public signOutfromAllEquipement() {
    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  /**
   * methode qui permet d'envoyer une demande de reintialiser le mot de passe.
   *
   * @param {string} username
   *
   * @memberOf AwsCognitoService
   */
  public forgotPassword(username: string) {
    Auth.forgotPassword(username)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  /**
   *  methode qui permet de valider le nouveau mot de passe ou le changement du mot passe.
   *
   * @param {string} username
   * @param {string} code
   * @param {string} new_password
   *
   * @memberOf AwsCognitoService
   */
  public validateNewPassword(username: string, code: string, new_password: string) {
    Auth.forgotPasswordSubmit(username, code, new_password)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
