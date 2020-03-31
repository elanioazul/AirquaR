import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsListHeatmapComponent } from './stations-list-heatmap.component';

describe('StationsListHeatmapComponent', () => {
  let component: StationsListHeatmapComponent;
  let fixture: ComponentFixture<StationsListHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsListHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsListHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
