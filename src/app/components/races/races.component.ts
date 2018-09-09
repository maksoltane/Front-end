import { Component, EventEmitter } from '@angular/core';
import { Input, Output} from '@angular/core';

@Component({
  selector: 'ns-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css'],
  providers: [],
})
export class RacesComponent {
  ponies: Array<any>;
  @Output()  poniesChange = new EventEmitter();

  constructor() {
  }
  public updatePoniesListe() {
      this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
      this.poniesChange.emit(this.ponies);
  }
}
