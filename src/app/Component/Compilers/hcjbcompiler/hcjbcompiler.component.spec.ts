import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HCJBCOMPILERComponent } from './hcjbcompiler.component';

describe('HCJBCOMPILERComponent', () => {
  let component: HCJBCOMPILERComponent;
  let fixture: ComponentFixture<HCJBCOMPILERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HCJBCOMPILERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HCJBCOMPILERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
