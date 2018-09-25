import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
    providers: [],

})
export class SidebarComponent {

  private items = [
    {
      title: 'Dashboard',
      link: [],
    },
    {
      title: 'Equipements',
      link: [],
    },
    {
      title: 'Mon profil',
      link: [],
    },
    {
      title: 'Se connecter',
      link: [],
    },
    {
      title: 'Se déconnecter',
      link: [],
    },
    {
      title: `M'inscire`,
      link: [],
    },
  ];
  constructor() { }

}
