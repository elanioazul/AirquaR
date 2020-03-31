import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapBtnComponent } from './heatmap-btn.component';

describe('HeatmapBtnComponent', () => {
  let component: HeatmapBtnComponent;
  let fixture: ComponentFixture<HeatmapBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
