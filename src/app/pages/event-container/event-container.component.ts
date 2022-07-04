import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { EventFeed,  EventFeedItems, ILoader, Iparams } from 'src/app/models/events.model';
import { EventService } from 'src/app/service/event.service';

type FormControlsNames = 'title' | 'field_category_tid' | 'field_geo_granularity_tid';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})

export class EventContainerComponent implements OnInit  {

public eventsList: EventFeedItems[] = []
public feedObject!: any 
public params: Iparams ={page:1}
public htmlContent!:SafeHtml
public form!: FormGroup;
public data ={
  field_category_tid:'',
  title:'',
  field_geo_granularity_tid:''
}
public formControls!: { [name in FormControlsNames]: FormControl | FormGroup };
  constructor(private eventService: EventService,private fb: FormBuilder) { 

  }
  public ui:ILoader = {loading:false,error:false,errorMessage:"",pageSize:10}
ngOnInit(): void {
 this.loadData()
 this.buildForm()
}


public loadData(): void{
  this.fetchData(this.params)
}

public fetchData(param:any):void{
  this.ui.loading = true;
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
    title: this.fb.control(''),
    field_category_tid: this.fb.control(''),
    field_geo_granularity_tid: this.fb.control('')
  }
  this.form = new FormGroup(this.formControls);
}

clearError():void{
  this.ui.error = !this.ui.error;
  this.ui.errorMessage = ""
}

getSearch(){
  const values:any = {}
  Object.keys(this.form.controls).forEach(key => {
  const {valid, value} = this.form.controls[key]
    if(valid && value){
      values[key] = value;
    }
  });
  console.log(values)
  this.fetchData(values)
}
public onPageChange(page:any):void {
  this.params.page = page
}


}
