import { Component} from '@angular/core';
import { User } from '../../models/user.models';
import { AwsCognitoService } from '../../services/aws-cognito.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  userData =  {} as User;
  errorMessage: string = null;
  successMessage: string = null;
  constructor(private awsCognitoService: AwsCognitoService)  { }
  onSubmitLogin() {
    this.errorMessage = null;
    this.successMessage = null;
    this.awsCognitoService.signIn(this.userData, this);
  }

}
