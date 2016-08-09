import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3> {{ keg.name }} - {{ keg.brand }} - $\{{ keg.price }} - {{ keg.alcoholContent}}% - Pints Remaining: {{ keg.pintsRemaining }}</h3>
    <button (click)="buttonClicked(keg)" class="btn btn-outline-primary">Reduce by one pint</button>
    <hr>
  `
})
export class KegComponent {
  public keg: Keg;
  buttonClicked(clickedKeg: Keg): void {
    clickedKeg.pintsRemaining -= 1;
  }
}
