import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Bus } from './Bus';

import { of } from 'rxjs/observable/of';

import * as BUSES from './buses/bus-services-data.json';


@Injectable()
export class BusService {

  constructor() { }

  getAll(): Observable<Bus[]> {
    return of(BUSES.data);
  }

}
