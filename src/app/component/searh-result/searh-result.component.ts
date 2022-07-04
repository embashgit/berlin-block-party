import { Component, Input } from '@angular/core';
import { Isearchable } from 'src/app/models/events.model';

@Component({
  selector: 'app-searh-result',
  templateUrl: './searh-result.component.html',
  styleUrls: ['./searh-result.component.css']
})
export class SearhResultComponent  {
  @Input()
  data!: Isearchable;
  constructor() { }
}
