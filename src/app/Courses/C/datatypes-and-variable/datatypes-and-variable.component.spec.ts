import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypesAndVariableComponent } from './datatypes-and-variable.component';

describe('DatatypesAndVariableComponent', () => {
  let component: DatatypesAndVariableComponent;
  let fixture: ComponentFixture<DatatypesAndVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatypesAndVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatypesAndVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
