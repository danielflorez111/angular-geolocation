import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Marcador } from '../../classes/marcador.class';
import { DeviceService } from '../../services/device.service';
import { IDevice } from '../../interfaces/device.interface';
import { ILocation } from '../../interfaces/location.interface';
import { MapsAPILoader } from '@agm/core';
import { MatTableDataSource } from '@angular/material';
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
  radius: number = 100;
  radiusOpts = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  location: ILocation;
  dataSource: MatTableDataSource<IDevice>;
  displayedColumns = ['title', 'lat', 'lng', 'distance'];
  lat: number = 6.2250704;
  lng: number = -75.57404319999999;

  constructor(public snackBar: MatSnackBar, private _deviceService: DeviceService, private mapsAPILoader: MapsAPILoader) {
    this.devices = this._deviceService.getDevices();

    // this.location = {
    //   lat: this.lat,
    //   lng: this.lng
    // };

    //this.setLocation();

    // this.test().then((position) => {
    //   console.log(position);
    // }).catch((err) => {
    //   console.log(err);
    // });

    // this.getPosition().then((position) => {
    //   console.log("Esta es", this.location);
    // });

  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.getPosition().then((position) => {
        console.log("Esta es", this.location);
        this.calculateDistances();
        this.updateDevices();
      });
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
    this.nearbyDevices = this.devices.filter(device => device.distance <= this.radius);
    this.farDevices = this.devices.filter(device => device.distance > this.radius);
    this.dataSource = new MatTableDataSource(this.farDevices);
  }

  onChange(radius) {
    this.radius = radius;
    this.updateDevices();
  }


  test() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getPosition() {
    console.log('Getting position');
    let promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          resolve(this.location);
        },
        () => {
          reject('Position could not be determined.');
        },
        {
          enableHighAccuracy: true
        }
      );
    });
    return promise;
  }

}