import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService,LOCAL_STORAGE } from 'ngx-webstorage-service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  userName: any;

  constructor(
    @Inject(LOCAL_STORAGE)
    private storage: StorageService,
  ) { }

  ngOnInit(): void {
    this.userName = this.storage.get('user');
    //const res = JSON.parse(this.storage.get('user'))
    //this.userName = res.username;
  }

}
