import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-npm',
  templateUrl: './sidebar-npm.component.html',
  styleUrls: ['./sidebar-npm.component.scss']
})
export class SidebarNpmComponent implements OnInit {

  public opened = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
