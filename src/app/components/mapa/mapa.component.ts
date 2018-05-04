import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Marcador } from '../../classes/marcador.class';
import { DeviceService } from '../../services/device.service';
import { IDevice } from '../../interfaces/device.interface';
import { ILocation } from '../../interfaces/location.interface';
import { MapsAPILoader } from '@agm/core';
import { MatTableDataSource } from '@angular/material';
import { blueMarker } from '../../shared/utils';
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
  icon = blueMarker;
  loading: boolean = true;
  slideState = false;

  constructor(
    public snackBar: MatSnackBar,
    private _deviceService: DeviceService,
    private mapsAPILoader: MapsAPILoader
  ) {
    this.devices = this._deviceService.getDevices();
  }

  ngOnInit() {
    this.mapsAPILoader
      .load()
      .then(() => this.setUserPosition());
  }

  dragEnd(event) {
    this.location = {
      lat: event.coords.lat,
      lng: event.coords.lng
    };
    this.calculateDistances();
    this.updateDevices();
    this.slideState = false;
  }

  calculateDistances() {
    const currentLocation = new google.maps.LatLng(this.location.lat, this.location.lng);
    
    this.devices.forEach((device) => {
      const deviceLocation = new google.maps.LatLng(device.lat, device.lng);
      device.distance = google.maps.geometry.spherical.computeDistanceBetween(deviceLocation, currentLocation);
    });
    
    this.devices.sort((a, b) => a.distance - b.distance);
  }

  updateDevices() {
    this.nearbyDevices = this.devices.filter(device => device.distance <= this.radius);
    this.farDevices = this.devices.filter(device => device.distance > this.radius);
    // Create the table with far devices
    this.dataSource = new MatTableDataSource(this.farDevices);
  }

  onChange(radius) {
    this.radius = radius;
    this.updateDevices();
    this.slideState = false;
  }

  setUserPosition() {
    this.getUserPosition()
      .then((userPosition: ILocation) => {

        this.location = {
          lat: userPosition.lat,
          lng: userPosition.lng
        };
        
        this.calculateDistances();
        this.updateDevices();

        this.loading = false;
        this.slideState = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

  getUserPosition() {
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          resolve(location);
        },
        () => reject('Position could not be determined.'),
        {
          enableHighAccuracy: true
        }
      );
    });
    
    return promise;
  }

  toggle(event) {
    if (event.checked) {
      this.slideState = true;
      this.dataSource = new MatTableDataSource(this.nearbyDevices);
    } else {
      this.slideState = false;  
      this.dataSource = new MatTableDataSource(this.farDevices);
    }
  }
}
