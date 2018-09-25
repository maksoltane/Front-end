import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient} from '@angular/common/http';
import {AwsCognitoService} from './services/aws-cognito.service';




@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //
  liveApi: any;
constructor(
  private toastr: ToastrService,
  private http: HttpClient,
  private awsCognitoService: AwsCognitoService) {
//
}

// showSuccess() {
//   this.toastr.success('Hello world!', 'Toastr fun!');
//   this.http.get('http://apilayer.net/api/live?access_key=c1cac5752dad6ece0a1944c9d9f06a74&currencies=EUR&source=USD&format=1').pipe(
//   )
// }

public testUser() {
  this.awsCognitoService.getUserConnected();
}
public seDeconnecter() {
  this.awsCognitoService.signOut();
}
}
