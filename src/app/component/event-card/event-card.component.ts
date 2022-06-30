import { Component, Input, OnInit } from '@angular/core';
import { IEventFeedItems, } from 'src/app/models/events.model';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input()
  EventItem!: IEventFeedItems;
  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
  }

  public copyToClipboard(text:string):void{
    this.clipboard.copy(text)
  }


}
