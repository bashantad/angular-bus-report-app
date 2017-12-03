import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { BusesComponent } from './buses.component';
import { BusService } from '../bus.service';
import { BusDetailComponent } from '../bus-detail/bus-detail.component';
import { BusTimeComponent } from '../bus-time/bus-time.component';

describe('BusesComponent', () => {
  let component: BusesComponent;
  let fixture: ComponentFixture<BusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ BusesComponent, BusDetailComponent, BusTimeComponent ],
      providers: [BusService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusesComponent);
    component = fixture.componentInstance;
    component.buses = [];
    fixture.detectChanges();
  });

  it('should create the Buses component', () => {
    expect(component).toBeTruthy();
  });
});
