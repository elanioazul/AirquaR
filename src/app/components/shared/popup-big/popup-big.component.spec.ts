import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBigComponent } from './popup-big.component';

describe('PopupBigComponent', () => {
  let component: PopupBigComponent;
  let fixture: ComponentFixture<PopupBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
