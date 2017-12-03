import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BusTimeComponent } from './bus-time.component';

describe('BusTimeComponent', () => {
  let component: BusTimeComponent;
  let fixture: ComponentFixture<BusTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(BusTimeComponent);
    component = fixture.componentInstance;
    component.busTime = { busId: '42612', routeVariant: '891 2 1', deviationFromTimetable: 77 };
    fixture.detectChanges();
  });

  it('creates bus time component', () => {
    expect(component).toBeTruthy();
  });

  it('shows bus id', () => {
    const el = fixture.debugElement.query(By.css('.bus_details_item')).nativeElement;
    expect(el.textContent).toContain('42612');
  });

  it('shows status of the bus timing', () => {
    const el = fixture.debugElement.query(By.css('.on_time')).nativeElement;
    expect(el.textContent).toContain('On Time');
  })
});
