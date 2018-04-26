import { Injectable } from '@angular/core';
import { IDevice } from "../interfaces/device.interface";

@Injectable()
export class DeviceService {

  private devices: IDevice[] = [
    {
      id: 1,
      title: 'Mercados del Rio',
      lat: 6.226702,
      lng: -75.575423
    },
    {
      id: 2,
      title: 'Centro de la moda',
      lat: 6.222734,
      lng: -75.574972
    },
    {
      id: 3,
      title: 'Gabriel Garcia Marquez',
      lat: 6.219673,
      lng: -75.571464
    }
  ];

  constructor() { }

  getDevices() {
    return this.devices;
  }

}
