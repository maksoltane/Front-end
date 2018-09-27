import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ns-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [],

})
export class SidebarComponent implements OnChanges {
  menu: any[] = [];
  @Input() isConnected: boolean;

  private menuIsConnected = [
    {
      title: 'Dashboard',
      link: ['dashboard'],
    },
    {
      title: 'Equipements',
      link: ['equipment'],
    },
    {
      title: 'Mon profil',
      link: ['profile'],
    },
    {
      title: 'Se connecter',
      link: ['signin'],
    },
    {
      title: 'Se déconnecter',
      link: ['signout'],
    },
    {
      title: `M'inscire`,
      link: [],
    },
  ];

  private menuIsNotConnected = [
    {
      title: 'Se connecter',
      link: ['signin'],
    },
    {
      title: `S'inscire`,
      link: ['signup'],
    },
  ];

  /**
   * checkConnected
   */
  public checkConnected() {
    if (this.isConnected) {
      this.menu = this.menuIsConnected;
    } else {
      this.menu = this.menuIsNotConnected;
    }
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkConnected();
  }

}
