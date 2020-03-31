import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFullHeatmapComponent } from './popup-full-heatmap.component';

describe('PopupFullHeatmapComponent', () => {
  let component: PopupFullHeatmapComponent;
  let fixture: ComponentFixture<PopupFullHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupFullHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFullHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
