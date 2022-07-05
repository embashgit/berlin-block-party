import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventCardComponent, NotificationComponent, SearchFormComponent } from 'src/app/component';
import { SearhResultComponent } from 'src/app/component/searh-result/searh-result.component';
import { EventContainerComponent } from './event-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {  MockComponents } from 'ng-mocks';

describe('EventContainerComponent', () => {
  let component: EventContainerComponent;
  let fixture: ComponentFixture<EventContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,  
        HttpClientTestingModule
    ],
      declarations: [ EventContainerComponent, MockComponents(EventCardComponent,SearchFormComponent,SearhResultComponent,NotificationComponent)],
      schemas:      [ NO_ERRORS_SCHEMA ],
     
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
