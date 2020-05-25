import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorFormComponent } from './collector-form.component';

describe('CollectorFormComponent', () => {
  let component: CollectorFormComponent;
  let fixture: ComponentFixture<CollectorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
