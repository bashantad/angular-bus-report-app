import { Component, OnInit, Input } from '@angular/core';
import { BusTime } from '../bus.time';
@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {

  @Input() busTimes: BusTime[];
  constructor() { }

  ngOnInit() {
  }

}
