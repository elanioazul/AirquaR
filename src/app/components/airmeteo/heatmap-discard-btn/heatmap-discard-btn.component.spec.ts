import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapDiscardBtnComponent } from './heatmap-discard-btn.component';

describe('HeatmapDiscardBtnComponent', () => {
  let component: HeatmapDiscardBtnComponent;
  let fixture: ComponentFixture<HeatmapDiscardBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapDiscardBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapDiscardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
