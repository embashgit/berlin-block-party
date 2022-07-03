import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent  {
  @Output() clearError = new EventEmitter();
  @Input() message:string = ""
  constructor() { }


  getClearError(){
    this.clearError.emit()
  }
}
