import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser = 'Login';

  constructor(private users: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.users.getUsersPostgres().subscribe((res) => {
      if (res) {
        this.currentUser = res;
      } else { this.currentUser = 'Login' }

    })
  }

}
