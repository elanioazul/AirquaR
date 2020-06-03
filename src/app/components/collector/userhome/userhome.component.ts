import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService,LOCAL_STORAGE } from 'ngx-webstorage-service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  public currentUser: any;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    //this.currentUser = this.storage.get('userId');
    //const res = JSON.parse(this.storage.get('user'))
    //this.userName = res.username;
    this.currentUser = this.storage.get('userId')
    this.usersService.getLoggedUser(this.currentUser).subscribe((res) => {
      debugger
      if (res) {
        this.currentUser = res[0].username;
        this.storage.set('user', res[0]);
      }
     });
  }

}
