import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNpmComponent } from './sidebar-npm.component';

describe('SidebarNpmComponent', () => {
  let component: SidebarNpmComponent;
  let fixture: ComponentFixture<SidebarNpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
