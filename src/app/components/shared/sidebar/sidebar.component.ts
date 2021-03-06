import { Component, OnInit, Output, Input, HostBinding } from '@angular/core';
import { MapboxGLService } from 'src/app/services/mapbox-gl.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isOpen = false;

  checkboxesCity: any[] = [
    { name: 'cb1', value: 'cb1', checked: false },
    { name: 'cb2', value: 'cb2', checked: true },
    { name: 'cb3', value: 'cb3', checked: false },
    { name: 'cb4', value: 'cb4', checked: false },
    { name: 'cb5', value: 'cb5', checked: false },
  ]

  checkboxesAir: any[] = [
    { name: 'probando', value: 'prueba', checked: false },
    { name: 'probando', value: 'prueba', checked: true },

  ]

  constructor(private mapService: MapboxGLService) { }


  ngOnInit() {

  }

  toggle() {
    this.isOpen = !this.isOpen;

  }

  // checkAllOptions() {
  //   //City layers
  //   if (this.checkboxesCity.every(val => val.checked == true))
  //     this.checkboxesCity.forEach(val => { val.checked = false });
  //   else
  //     this.checkboxesCity.forEach(val => { val.checked = true });
  //   //Air and meteo layers
  //   if (this.checkboxesAir.every(val => val.checked == true))
  //     this.checkboxesAir.forEach(val => { val.checked = false });
  //   else
  //     this.checkboxesAir.forEach(val => { val.checked = true });
  // }

  displayGeodata($event) {
    this.mapService.addGeodata();
  }

  airStationsToggle(event) {
    this.mapService.toogleLayer('airstationsLayer', event.target.checked)
  }

  meteoStationsToggle(event) {
    this.mapService.toogleLayer('meteostationsLayer', event.target.checked)
  }


}
