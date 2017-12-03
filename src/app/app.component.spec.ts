import { TestBed, async } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BusesComponent } from './buses/buses.component';
import { BusService } from './bus.service';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { BusTimeComponent } from './bus-time/bus-time.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        BusesComponent,
        BusDetailComponent,
        BusTimeComponent
      ],
      providers: [BusService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Bus Reports'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Bus Reports');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bus Reports');
  }));

  it('renders bus organisation and date', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.organisation').textContent).toContain('Sydney Buses - 25/09/2015');
  }));


});
