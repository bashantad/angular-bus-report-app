import { Component, OnInit, Input } from '@angular/core';
import { BusTime } from '../bus.time';

@Component({
  selector: 'app-bus-time',
  templateUrl: './bus-time.component.html',
  styleUrls: ['./bus-time.component.css']
})
export class BusTimeComponent implements OnInit {

  status: string;
  statusClass: string;
  busNo: string;
  variant: string;
  @Input() busTime: BusTime;
  constructor() { }

  ngOnInit() {
    this.loadStatus();
    this.loadVariant();
  }

  loadStatus() {
    const timeDeviation = this.busTime.deviationFromTimetable;
    if (timeDeviation > 275) {
      this.status = 'Late';
    }else if (timeDeviation < -200) {
      this.status = 'Early';
    }else {
      this.status = 'On Time';
    }
    this.statusClass = this.status.toLowerCase().split(' ').join('_');
  }

  loadVariant() {
    const arr = this.busTime.routeVariant.split(' ');
    if (arr.length > 1) {
      this.busNo = arr.shift();
      this.variant = arr.join(' ');
    }
  }
}
