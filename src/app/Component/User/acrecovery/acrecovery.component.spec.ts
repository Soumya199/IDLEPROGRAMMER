import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACRecoveryComponent } from './acrecovery.component';

describe('ACRecoveryComponent', () => {
  let component: ACRecoveryComponent;
  let fixture: ComponentFixture<ACRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
