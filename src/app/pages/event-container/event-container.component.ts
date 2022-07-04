import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { EventFeed,  EventFeedItems, ILoader, Iparams, Isearchable } from 'src/app/models/events.model';
import { EventService } from 'src/app/service/event.service';

type FormControlsNames = 'q' | 'anschrift';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})

export class EventContainerComponent implements OnInit  {

public eventsList: EventFeedItems[] = []
public feedObject!: any 
public params: Iparams ={page:1,count:0,items_per_page:0}
public htmlContent!:SafeHtml
public form!: FormGroup;
public searchResult: Isearchable[]= []
public formControls!: { [name in FormControlsNames]: FormControl | FormGroup };
  constructor(private eventService: EventService,private fb: FormBuilder) { 

  }
  public ui:ILoader = {loading:false,error:false,errorMessage:"",pageSize:10,isSearching:false}
ngOnInit(): void {
 this.loadData()
 this.buildForm()
}


public loadData(): void{
  this.fetchData(this.params)
}

public fetchData(param:any):void{
  this.ui.loading = true;
  this.ui.isSearching = false;
  this.eventService.getAll(param).subscribe({
    next: (res:EventFeed)=>{
     const {feed,...rest } = res;
     this.eventsList = feed;
      this.feedObject = rest;
    this.ui.loading = false;
    },
    error: () => {
      this.ui.error = true;
      this.ui.errorMessage = "Unable to fetch Data"
      this.ui.loading = false;
    },
    complete: () => this.ui.loading = false
    });
}


private buildForm(): void {
  this.formControls = {
    q: this.fb.control(''),
    anschrift: this.fb.control('')
  }
  this.form = new FormGroup(this.formControls);
}

clearError():void{
  this.ui.error = !this.ui.error;
  this.ui.errorMessage = ""
}

search(param:any):void{
  this.ui.loading = true;
  this.ui.isSearching = true;
  this.eventService.searchFeeds(param).subscribe({
    next: (res:any)=>{
    const {results,index} = res;
    this.params.page =1
    this.searchResult = index;
    this.params = {...this.params, ...results};
    },
    error: () => {
      this.ui.error = true;
      this.ui.errorMessage = "Record not found"
      this.ui.loading = false;
    },
    complete: () => this.ui.loading = false
    });
}

getSearch(){
  const values:any = {}
  Object.keys(this.form.controls).forEach(key => {
  const {valid, value} = this.form.controls[key]
    if(valid && value){
      values[key] = value;
    }
  });
  this.search(values)
}
public onPageChange(page:any):void {
  this.params.page = page
}


}
