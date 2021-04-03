import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageProjectsComponent } from './collage-projects.component';

describe('CollageProjectsComponent', () => {
  let component: CollageProjectsComponent;
  let fixture: ComponentFixture<CollageProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollageProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollageProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
