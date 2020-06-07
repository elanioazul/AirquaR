import { Component, OnInit, Inject } from '@angular/core';
import { StorageService,LOCAL_STORAGE } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../classes/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //public currentUser: any;
  public myAirqua = 'My airQ'

  constructor(
    @Inject(LOCAL_STORAGE)
    private storage: StorageService,
    private usersService: UsersService,
    private activedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.currentUser = this.storage.get('user')
    //this.usersService.getLoggedUser(this.currentUser)

  }

}
