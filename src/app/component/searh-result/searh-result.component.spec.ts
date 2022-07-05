import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhResultComponent } from './searh-result.component';

describe('SearhResultComponent', () => {
  let component: SearhResultComponent;
  let fixture: ComponentFixture<SearhResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearhResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearhResultComponent);
    component = fixture.componentInstance;
    component.data = {
    anschrift:"",
    art:"string",
    empfaengerid: "string",
    geber: "string",
    id: "string;",
    jahr: "",
    name: "string;",
    politikbereich:" string;",
    zweck:" string"
    }
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
