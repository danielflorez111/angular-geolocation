import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Marcador } from '../../classes/marcador.class';
import { DeviceService } from '../../services/device.service';
import { IDevice } from '../../interfaces/device.interface';
import { ILocation } from '../../interfaces/location.interface';
import { MapsAPILoader } from '@agm/core';
declare var google: any;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  devices: IDevice[] = [];
  nearbyDevices: IDevice[] = [];
  farDevices: IDevice[] = [];
  location: ILocation;
  marcadores: Marcador[] = []
  lat: number = 6.2250704;
  lng: number = -75.57404319999999;

  constructor(public snackBar: MatSnackBar, private _deviceService: DeviceService, private mapsAPILoader: MapsAPILoader) {
    this.devices = this._deviceService.getDevices();
    //this.setLocation();

    this.location = {
      lat: this.lat,
      lng: this.lng
    };
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.calculateDistances();
      this.updateDevices();
    });
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
    this.updateDevices();
  }

  calculateDistances() {
    this.devices.map((device) => {
      let deviceLocation = new google.maps.LatLng(device.lat, device.lng);
      let currentLocation = new google.maps.LatLng(this.location.lat, this.location.lng);
      device.distance = google.maps.geometry.spherical.computeDistanceBetween(deviceLocation, currentLocation);
    });
  }

  updateDevices() {
    this.nearbyDevices = this.devices.filter(device => device.distance <= 100);
    this.farDevices = this.devices.filter(device => device.distance > 100)
  }

}