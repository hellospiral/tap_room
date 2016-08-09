import { Component, EventEmitter } from 'angular2/core';
import {KegListComponent} from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Tap Room!</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Desolation IPA", "Ninkasi", 5, 9),
      new Keg("Dead Guy Pale Ale", "Full Sail", 4, 7),
      new Keg("Stella Artois", "Stella", 4, 5)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
