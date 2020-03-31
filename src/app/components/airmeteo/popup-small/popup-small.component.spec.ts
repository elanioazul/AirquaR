import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSmallComponent } from './popup-small.component';

describe('PopupSmallComponent', () => {
  let component: PopupSmallComponent;
  let fixture: ComponentFixture<PopupSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
