import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <hr>
    <div class="keg-form">
      <h4>Edit Name: </h4>
      <input [(ngModel)]="keg.name" class='col-sm-8 input-lg keg-form'/><br><br><br>
      <h4>Edit Brand: </h4>
      <input [(ngModel)]="keg.brand" class='col-sm-8 input-lg keg-form'/><br><br><br>
      <h4>Edit Price: </h4>
      <input [(ngModel)]="keg.price" class='col-sm-8 input-lg keg-form'/><br><br><br>
      <h4>Edit Alcohol Content: </h4>
      <input [(ngModel)]="keg.alcoholContent" class='col-sm-8 input-lg keg-form'/><br><br><br>
    </div>
    <hr>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
