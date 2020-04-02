import { Component, OnInit, Output, Input } from '@angular/core';
import { ToggleSidebarService } from 'src/app/services/toggle-sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // @Input() isOpen: boolean;
  // public clase: string;
  //[ngClass]="{sidebar: isOpen, sidebarShow: !isOpen}"

  //suscribe the sidebar to the observable
  constructor(private _toggleService:ToggleSidebarService) { }

  ngOnInit() {
    this._toggleService.openSidebar$
    .subscribe(
      instruction => {
        if (instruction = false) {
          alert('la sidebar debe NO estar desplegada');
        } else if (instruction = true) {
          alert('la sidebar debe estar desplegada')
        }

      }
    );
  }

  // sidebarOpen() {
  //   this.isOpen = true;
  //   this.clase = 'sidebarShow'
  // }

  // sidebarClose() {
  //   this.isOpen = false;
  //   this.clase = 'sidebar'
  // }

}
