import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render a nav element', () => {
    const compiledElement = fixture.nativeElement as HTMLElement;
    expect(compiledElement.querySelector('div nav')).toBeDefined();
  });

  it('should toggle hambugger',()=>{
    let  navButton = fixture.debugElement.nativeElement.querySelector('button');
    expect(component.hamburgerOpen).toBeFalsy()
    navButton.click()
    fixture.whenStable().then(()=>{
      fixture.detectChanges()
      expect(component.hamburgerOpen).toBeTruthy();
    })
  })
});
