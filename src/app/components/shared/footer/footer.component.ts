import { Component, OnInit, Output, HostListener, EventEmitter } from '@angular/core';
import { MapboxGLService } from 'src/app/services/mapbox-gl.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() navigateEvent = new EventEmitter<any>();
  navigate: Boolean = false;

  constructor(private mapService: MapboxGLService) {

  }



  ngOnInit(): void {
  }

  navigator ($event) {
    //this.navigate = !this.navigate
    //this.navigateEvent.emit(this.navigate);
    this.mapService.navigation();
  }

  geocoder($event) {

  }








}
