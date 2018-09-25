import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private sidebarService: NbSidebarService) { }

  public toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
