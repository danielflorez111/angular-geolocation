import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Marcador } from '../../classes/marcador.class';
import { DeviceService } from '../../services/device.service';
import { IDevice } from '../../interfaces/device.interface';
import { ILocation } from '../../interfaces/location.interface';
declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  devices: IDevice[] = [];
  location: ILocation;
  marcadores: Marcador[] = []
  lat: number = 6.2250704;
  lng: number = -75.57404319999999;

  constructor(public snackBar: MatSnackBar, private _deviceService: DeviceService) {
    this.devices = this._deviceService.getDevices();
    this.setLocation();
    //this.calculateDistances();
  }

  ngOnInit() {
  }

  setLocation(location?: ILocation) {
    if (!location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    } else {
      this.location = {
        lat: location.lat,
        lng: location.lng
      };
    }
  }

  dragEnd(event) {
    this.setLocation(event.coords);
    this.calculateDistances();
    console.log(this.devices);
  }

  calculateDistances() {
    this.devices.map((device) => {
      let deviceLocation = new google.maps.LatLng(device.lat, device.lng);
      let currentLocation = new google.maps.LatLng(this.location.lat, this.location.lng);
      device.distance = google.maps.geometry.spherical.computeDistanceBetween(deviceLocation, currentLocation);
    });
  }

}