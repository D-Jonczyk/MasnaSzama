import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../courier-panel.component.css', './navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;
  marker: any;
  // Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  links = [
    { title: 'Nawigacja', fragment: '/navigation' },
    { title: 'Lista zamówień', fragment: '/orderlist'},
    { title: 'Grafik', fragment: '/show-schedule'},
    { title: 'Mój profil', fragment: '/profile'},
    { title: 'Wsparcie kuriera', fragment: '/support'}
  ];

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    // Default Marker
    const marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
      title: 'Hello World!'
    });


    // Adding Click event to default marker
    this.marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    // Adding default marker to map
    this.marker.setMap(this.map);

    // Adding other markers
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
      // creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });

      // Add click event to open info window on marker
      this.marker.addListener('click', () => {
        infoWindow.open(this.marker.getMap(), this.marker);
      });

      // Adding marker to google map
      this.marker.setMap(this.map);
    }
}
