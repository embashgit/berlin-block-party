import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { EventFeed, IEventFeedItems, IFeed, ILoader, Iparams } from 'src/app/models/events.model';
import { EventService } from 'src/app/service/event.service';
@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent implements OnInit  {
public eventsList: IEventFeedItems[] = []
public feedObject : EventFeed = {}
public params: Iparams ={page:20}
public totalRecords = 200
  constructor(private eventService: EventService) { 

  }
  public ui:ILoader = {loading:false,error:"",pageSize:10}
ngOnInit(): void {
 this.loadData()
}


public loadData(): void{
  this.fetchData(this.params)
}


public fetchData(param:any):void{
  this.ui.loading = true;
  this.eventService.getAll(param).subscribe({
    next: (res:IFeed)=>{
    this.eventsList = res.items;
    this.feedObject = new EventFeed(res.feed)
    this.ui.loading = false;
    },
    error: () => throwError(()=> new Error(this.ui.error = "Event not loaded")),
    complete: () => this.ui.loading = false
    });
}


public onPageChange(page:any):void {
  console.log(page)
  // const offset = (page - 1) * this.ui.pageSize;
  // this.eventsList = this.eventsList.slice(offset, offset + this.ui.pageSize);
  this.params.page =page
  this.fetchData(this.params);
}


}
