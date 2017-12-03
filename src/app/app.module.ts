import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BusesComponent } from './buses/buses.component';
import { BusService } from './bus.service';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { BusTimeComponent } from './bus-time/bus-time.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BusesComponent,
    BusDetailComponent,
    BusTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
