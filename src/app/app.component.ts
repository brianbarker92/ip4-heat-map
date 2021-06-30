import { AfterViewInit, Component, VERSION } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.heat/dist/leaflet-heat.js'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements AfterViewInit{
  name = 'Angular ' + VERSION.major;

  private map;
  private heat;
  private tiles;

  private initMap(): void {
    this.map = L.map('map', {
      center: [22.876490, -109.899780],
      zoom: 5
    });

    this.tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.addHeatLayer()
  }

  addHeatLayer() {
    this.heat = L.heatLayer([
      [22.876490, -109.899780, 100], // lat, lng, intensity
      [22.876490, -109.899780, 100000], // to just see that it works, put one place for now really intense
    ], {radius: 25}).addTo(this.map);

  }
}
