import { Component, OnInit, Output } from '@angular/core';
import { ToggleSidebarService } from '../../../services/toggle-sidebar.service'



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isOpen = false;

  constructor(private _toggleService:ToggleSidebarService) {

  }

  ngOnInit(): void {
  }

  //this method is design to call the sendInstruction method from the service, passing in a instruction.
  openSidebar() {
    this._toggleService.sendInstruction(this.isOpen);
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }



}
