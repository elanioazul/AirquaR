import { Component, OnInit,  Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-sm',
  templateUrl: './popup-sm.component.html',
  styleUrls: ['./popup-sm.component.scss']
})
export class PopupSmComponent implements OnInit {

  @Input() modalVisible: boolean = false;

  @Input() isFull: boolean = true;

  @Input() title: string;

  @Input() modalId: string;

  @Output() close = new EventEmitter();

  constructor(private modal: ElementRef) { }

  ngOnInit(): void {

  }

  onClose(): void {
    this.close.emit(this.modal);
  }

}
