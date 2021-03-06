import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';

import { BusDetailComponent } from './bus-detail.component';
import { BusTimeComponent } from '../bus-time/bus-time.component';

describe('BusDetailComponent', () => {
  let component: BusDetailComponent;
  let fixture: ComponentFixture<BusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ BusDetailComponent, BusTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create BusDetail component', () => {
    expect(component).toBeTruthy();
  });
});
