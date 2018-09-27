import { Component, Input } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'ns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
 @Input() isConnected: boolean;

  user = {
    id: 0,
    name: 'Jonh Doe',
    title: 'Administrator',
    picture: '',
    message: [{
      id: 1,
      type: 'danger',
      title: 'Coactique aliquotiens nostri pedites ad eos perseque',
      message: '',
    }, {
      id: 2,
      type: '',
      title: 'Coactique aliquotiens nostri pedites ad eos per',
      message: '',

    }],
    notification: [{

    }, {

    }],
  };

public userHeaderMenu = [
  { title: 'Mon Profil', link: 'users' },
  { title: 'Message', link: 'message' },
  { title: 'Log out', link: 'signout' }];
  constructor(private sidebarService: NbSidebarService) {
  }
  public toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
