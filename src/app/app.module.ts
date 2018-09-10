import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RacesComponent } from './components/races/races.component';
import { HttpClientModule } from '@angular/common/http';
import { AwsCognitoService } from './services/aws-cognito.service';
import { AuthenticationComponent } from './components/registration/authentication.component';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  // {path: 'UI/part1/Details', component: DetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    AuthenticationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
    NbAlertModule,
    NbCardModule,
    NbCardModule,
    NbLayoutModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbContextMenuModule,
    NbCalendarModule,
    NbButtonModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NbSpinnerModule,
    NbInputModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [AwsCognitoService, NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
