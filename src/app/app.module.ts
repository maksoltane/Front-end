import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RacesComponent } from './components/races/races.component';
import { HttpClientModule } from '@angular/common/http';
import { AwsCognitoService } from './services/aws-cognito.service';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/connexion/connexion.component';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './routing/app-routing.module';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './components/dashbord/dashboard.component';
import { SignoutComponent } from './components/signout/signout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


import {
  NbSidebarService,
  NbAlertModule,
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbCardModule,
  NbCalendarModule,
  NbSpinnerModule,
  NbInputModule,
  NbButtonModule,
} from '@nebular/theme';


const appRoutes: Routes = [
  // {path: 'UI/part1/Details', component: DetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    InscriptionComponent,
    LoginComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    SignoutComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbAlertModule,
    NbCardModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbCheckboxModule,
    NbMenuModule,
    NbPopoverModule,
    NbContextMenuModule,
    NbCalendarModule,
    NbButtonModule,
    BrowserAnimationsModule,
    NbSpinnerModule,
    NbInputModule, // required animations module
    ToastrModule.forRoot(), AppRoutingModule, // ToastrModule added
    RouterModule.forRoot(appRoutes),
    NbMenuModule.forRoot(),
  ],
  providers: [AwsCognitoService, NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
