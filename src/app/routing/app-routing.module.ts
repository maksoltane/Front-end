import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForgotpasswordComponent} from '../components/forgotpassword/forgotpassword.component';
import { InscriptionComponent } from '../components/inscription/inscription.component';
import { LoginComponent } from '../components/connexion/connexion.component';
import {DashboardComponent} from '../components/dashbord/dashboard.component';
import { SignoutComponent } from '../components/signout/signout.component';
import {PageNotFoundComponent} from '../components/page-not-found-component/page-not-found.component';

const routes: Routes = [
  // page reinitialiser mot de passe
  { path: 'forgot_password', component: ForgotpasswordComponent },
  // page inscription
  { path: 'signup', component: InscriptionComponent },
  // page connexion
  { path: 'signin', component: LoginComponent },
  { path: 'signout', component: SignoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent},
 // { path: '', component: LoginComponent, resolve: {test: getlist()} },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
//
}
