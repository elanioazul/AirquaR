import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser = 'example2';

  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users.getUsersPostgres().subscribe((res) => {
      this.currentUser = res;
    })
  }

}
