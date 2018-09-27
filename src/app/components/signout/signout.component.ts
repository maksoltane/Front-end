import { Component, OnInit } from '@angular/core';
import { AwsCognitoService } from '../../services/aws-cognito.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'ns-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  isDeconnecte = true;
  constructor() { }

  /**
 *  methode qui permet de deconnecter le user de l'équipement actuel.
 *
 * @memberOf AwsCognitoService
 */
  public signOut(): void {
    Auth.signOut()
      .then((data) => {
        this.isDeconnecte = true;
      })
      .catch((err) => {
        this.isDeconnecte = false;
      });
  }
  ngOnInit() {
    this.signOut();
  }

}
