import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForgotpasswordComponent} from '../components/forgotpassword/forgotpassword.component';
import { InscriptionComponent } from '../components/inscription/inscription.component';
import { LoginComponent } from '../components/connexion/connexion.component';
import {DashboardComponent} from '../components/dashbord/dashboard.component';

const routes: Routes = [
  // page reinitialiser mot de passe
  { path: 'forgot_password', component: ForgotpasswordComponent },
  // page inscription
  { path: 'signup', component: InscriptionComponent },
  // page connexion
  { path: 'signin', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
 // { path: '', component: LoginComponent, resolve: {test: getlist()} },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
//
}
