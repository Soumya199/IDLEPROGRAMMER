import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCProgramComponent } from './first-cprogram.component';

describe('FirstCProgramComponent', () => {
  let component: FirstCProgramComponent;
  let fixture: ComponentFixture<FirstCProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
