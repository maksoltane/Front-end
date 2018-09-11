import { Component } from '@angular/core';
import { User } from './models/user.models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //

  //
constructor( private toastr: ToastrService) {


}

showSuccess() {
  this.toastr.success('Hello world!', 'Toastr fun!');
}
}
