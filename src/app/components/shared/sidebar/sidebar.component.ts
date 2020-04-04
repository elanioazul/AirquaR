import { Component, OnInit, Output, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  isOpen = false;


  constructor() { }


  ngOnInit() {

  }

  toggle() {
    this.isOpen = !this.isOpen;

  }





}
