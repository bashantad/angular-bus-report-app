import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BusesComponent } from './buses/buses.component';
import { BusService } from './bus.service';

@NgModule({
  declarations: [
    AppComponent,
    BusesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
