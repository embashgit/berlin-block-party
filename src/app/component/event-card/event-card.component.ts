import { Component, Input } from '@angular/core';
import { IEventFeedItems, } from 'src/app/models/events.model';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent  {
  @Input()
  EventItem!: IEventFeedItems;
  constructor(private clipboard: Clipboard) {}


  public copyToClipboard(text:string):void{
    this.clipboard.copy(text)
  }


}
