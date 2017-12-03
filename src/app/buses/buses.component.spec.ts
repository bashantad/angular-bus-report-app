import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesComponent } from './buses.component';
import {BusService} from '../bus.service';

describe('BusesComponent', () => {
  let component: BusesComponent;
  let fixture: ComponentFixture<BusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusesComponent ],
      providers: [BusService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
