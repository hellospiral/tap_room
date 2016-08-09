import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h4>Add a Keg:</h4>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
      <input placeholder="Price per pint" class="col-sm-8 input-lg" #newPrice>
      <input placeholder="Alcohol content" class="col-sm-8 input-lg" #newAlcohol>
      <button (click)="addKeg(newName, newBrand, newPrice, newAlcohol)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(kegName: HTMLInputElement, kegBrand: HTMLInputElement, kegPrice: HTMLInputElement, kegAlcohol: HTMLInputElement){
    this.onSubmitNewKeg.emit([kegName.value, kegBrand.value, kegPrice.value, kegAlcohol.value]);
    kegName.value = "";
    kegBrand.value = "";
    kegPrice.value = "";
    kegAlcohol.value = "";
  }
}
