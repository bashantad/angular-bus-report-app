import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  buses: Bus[];

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.getBuses();
  }

  toggleBus(bus: Bus) {
    bus.visible = !bus.visible;
  }

  getBuses(): void {
    this.busService.getAll()
      .subscribe(buses => {
        this.buses = buses;
      });
  }

}
