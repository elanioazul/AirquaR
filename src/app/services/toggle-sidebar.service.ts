import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {




  //WISHWASH
  //private property as the subject
  //private _openSidebarSource = new Subject<boolean>();
  //to expose the subject as an Observable we need to append an dollar sign
  //openSidebar$ = this._openSidebarSource.asObservable();

  //DAVID ARTICLE
  //@Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  //WISWASH
  //this is a method that recieves a message from open botton footer and then pushes that message using the observable.
  // sendInstruction(instruction: boolean) {
  //   debugger
  //   this._openSidebarSource.next(instruction);
  // }

  //DAVID ARTICLE




}
