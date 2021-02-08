import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvirnmentsetupComponent } from './envirnmentsetup.component';

describe('EnvirnmentsetupComponent', () => {
  let component: EnvirnmentsetupComponent;
  let fixture: ComponentFixture<EnvirnmentsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvirnmentsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvirnmentsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
