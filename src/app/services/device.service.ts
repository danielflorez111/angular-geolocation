import { Injectable } from '@angular/core';
import { IDevice } from "../interfaces/device.interface";
import * as faker from 'faker';

@Injectable()
export class DeviceService {

  private devices: IDevice[] = [];

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.devices.push({
        id: i,
        title: faker.address.streetName(),
        lat: parseFloat(faker.finance.amount(6.218037, 6.232031, 6)),
        lng: parseFloat(faker.finance.amount(-75.580770, -75.568368, 6)),
        active: faker.random.boolean()
      });
    }
    console.log(this.devices);
  }

  getDevices() {
    return this.devices.filter((device) => device.active == true);
  }

}