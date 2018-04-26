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
  }

  ngOnInit() {
  }

  agregarMarcador(event) {
    const coords: { lat: number, lng: number } = event.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 1000 });
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 1000 });
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  setLocation(location?: ILocation) {
    if (!location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log("jaja", this.location);
      });
    } else {
      this.location = {
        lat: location.lat,
        lng: location.lng
      };
    }
  }

  bla(event) {
    this.devices.map((device) => {
      let deviceLocation = new google.maps.LatLng(device.lat, device.lng);
      let currentLocation = new google.maps.LatLng(this.location.lat, this.location.lng);
      device.distance = google.maps.geometry.spherical.computeDistanceBetween(deviceLocation, currentLocation);
    });
    this.setLocation(event.coords);
    console.log(this.devices);

    // let coord1 = new google.maps.LatLng(6.223604, -75.572741);
    // let coord2 = new google.maps.LatLng(6.223646, -75.575402);
    // let distance = google.maps.geometry.spherical.computeDistanceBetween(coord1, coord2);
    // console.log("distance", distance);
  }

}