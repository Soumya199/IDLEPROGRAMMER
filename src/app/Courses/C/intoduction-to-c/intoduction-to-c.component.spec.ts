import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoductionToCComponent } from './intoduction-to-c.component';

describe('IntoductionToCComponent', () => {
  let component: IntoductionToCComponent;
  let fixture: ComponentFixture<IntoductionToCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntoductionToCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoductionToCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
