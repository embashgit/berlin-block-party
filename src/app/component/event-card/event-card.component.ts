import { Component, Input } from '@angular/core';
import { EventFeedItems } from 'src/app/models/events.model';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent  {
  @Input()
  EventItem!: EventFeedItems;
  constructor() {}


}
