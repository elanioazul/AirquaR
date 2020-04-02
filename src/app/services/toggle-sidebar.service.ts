import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {

  // public opened = true;
  // public sidebar: any;

  //private property as the subject
  private _openSidebarSource = new Subject<boolean>();
  //to expose the subject as an Observable we need to append an dollar sign
  openSidebar$ = this._openSidebarSource.asObservable();

  constructor() { }

  //this is a method that recieves a message from open botton footer and then pushes that message using the observable.
  sendInstruction(instruction: boolean) {
    this._openSidebarSource.next(instruction);
  }



}
