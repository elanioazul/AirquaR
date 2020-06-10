import { Component, OnInit, Output, HostListener } from '@angular/core';
import { MapboxGLService } from 'src/app/services/mapbox-gl.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



  constructor(private mapService: MapboxGLService) {

  }



  ngOnInit(): void {
  }

  navigator (event) {
    this.mapService.navigation();
  }








}
