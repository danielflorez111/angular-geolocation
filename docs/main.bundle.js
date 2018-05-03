webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Geolocation</span>\n</mat-toolbar>\n\n<div class=\"main-container\">\n  <app-mapa></app-mapa>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_mapa_mapa_component__ = __webpack_require__("./src/app/components/mapa/mapa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_device_service__ = __webpack_require__("./src/app/services/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_mapa_mapa_component__["a" /* MapaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBxa_9f44lAmCRS2HNo_ipW2EsJx6J2LJ4',
                    libraries: ['geometry']
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_device_service__["a" /* DeviceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/mapa/mapa.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 600px;\r\n    width: 60vw;\r\n}\r\n\r\nmat-card-content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.right {\r\n    padding: 20px;\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-title {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 50%;\r\n            flex: 0 0 50%;\r\n}\r\n\r\n.title {\r\n    color: #333398;\r\n}"

/***/ }),

/***/ "./src/app/components/mapa/mapa.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\r\n  <mat-card-content *ngIf=\"location\">\r\n\r\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"17\">\r\n\r\n      <agm-circle [latitude]=\"location.lat\" [longitude]=\"location.lng\" [radius]=\"radius\">\r\n\r\n      </agm-circle>\r\n\r\n      <agm-marker (dragEnd)=\"dragEnd($event)\" [markerDraggable]=\"true\" [latitude]=\"location.lat\" [longitude]=\"location.lng\">\r\n\r\n      </agm-marker>\r\n\r\n      <agm-marker *ngFor=\"let device of nearbyDevices; let i = index\" [latitude]=\"device.lat\" [longitude]=\"device.lng\">\r\n\r\n        <agm-info-window>\r\n          <strong> titulo </strong>\r\n          <p> desc </p>\r\n          <!-- <div>\r\n            <button mat-raised-button color=\"primary\">Editar</button>\r\n            <button (click)=\"borrarMarcador(i)\" mat-raised-button color=\"warn\">Borrar</button>\r\n          </div> -->\r\n        </agm-info-window>\r\n\r\n      </agm-marker>\r\n\r\n    </agm-map>\r\n\r\n    <div class=\"right\">\r\n\r\n      <div>\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Select radius\" name=\"radius\" [(ngModel)]=\"radius\" (change)=\"onChange($event.value)\">\r\n            <mat-option *ngFor=\"let opt of radiusOpts\" [value]=\"opt\">\r\n              {{ opt }} m\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <h2 class=\"title\">Non access devices</h2>\r\n\r\n        <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n          <!-- Title Column -->\r\n          <ng-container matColumnDef=\"title\">\r\n            <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Lat Column -->\r\n          <ng-container matColumnDef=\"lat\">\r\n            <mat-header-cell *matHeaderCellDef> Lat </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.lat | number : '1.3-3' }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Lng Column -->\r\n          <ng-container matColumnDef=\"lng\">\r\n            <mat-header-cell *matHeaderCellDef> Lng </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.lng | number : '1.3-3' }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Distance Column -->\r\n          <ng-container matColumnDef=\"distance\">\r\n            <mat-header-cell *matHeaderCellDef> Distance </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.distance | number : '1.0-0' }} m</mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n\r\n<button (click)=\"setLocation();\">set current position</button>"

/***/ }),

/***/ "./src/app/components/mapa/mapa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_device_service__ = __webpack_require__("./src/app/services/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapaComponent = /** @class */ (function () {
    function MapaComponent(snackBar, _deviceService, mapsAPILoader) {
        this.snackBar = snackBar;
        this._deviceService = _deviceService;
        this.mapsAPILoader = mapsAPILoader;
        this.devices = [];
        this.nearbyDevices = [];
        this.farDevices = [];
        this.radius = 100;
        this.radiusOpts = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
        this.displayedColumns = ['title', 'lat', 'lng', 'distance'];
        this.lat = 6.2250704;
        this.lng = -75.57404319999999;
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
    MapaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            _this.getPosition().then(function (position) {
                console.log("Esta es", _this.location);
                _this.calculateDistances();
                _this.updateDevices();
            });
        });
    };
    MapaComponent.prototype.setLocation = function (location) {
        var _this = this;
        if (!location && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        }
        else {
            this.location = {
                lat: location.lat,
                lng: location.lng
            };
        }
    };
    MapaComponent.prototype.dragEnd = function (event) {
        console.log(event);
        this.setLocation(event.coords);
        this.calculateDistances();
        this.updateDevices();
    };
    MapaComponent.prototype.calculateDistances = function () {
        var _this = this;
        this.devices.map(function (device) {
            var deviceLocation = new google.maps.LatLng(device.lat, device.lng);
            var currentLocation = new google.maps.LatLng(_this.location.lat, _this.location.lng);
            device.distance = google.maps.geometry.spherical.computeDistanceBetween(deviceLocation, currentLocation);
        });
    };
    MapaComponent.prototype.updateDevices = function () {
        var _this = this;
        this.nearbyDevices = this.devices.filter(function (device) { return device.distance <= _this.radius; });
        this.farDevices = this.devices.filter(function (device) { return device.distance > _this.radius; });
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatTableDataSource */](this.farDevices);
    };
    MapaComponent.prototype.onChange = function (radius) {
        this.radius = radius;
        this.updateDevices();
    };
    MapaComponent.prototype.test = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };
    MapaComponent.prototype.getPosition = function () {
        var _this = this;
        console.log('Getting position');
        var promise = new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                resolve(_this.location);
            }, function () {
                reject('Position could not be determined.');
            }, {
                enableHighAccuracy: true
            });
        });
        return promise;
    };
    MapaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-mapa',
            template: __webpack_require__("./src/app/components/mapa/mapa.component.html"),
            styles: [__webpack_require__("./src/app/components/mapa/mapa.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]])
    ], MapaComponent);
    return MapaComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Angular Material






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_select__["a" /* MatSelectModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_select__["a" /* MatSelectModule */]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceService = /** @class */ (function () {
    function DeviceService() {
        this.devices = [
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
    }
    DeviceService.prototype.getDevices = function () {
        return this.devices;
    };
    DeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map