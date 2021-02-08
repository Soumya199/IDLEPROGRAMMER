import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCompilersComponent } from './online-compilers.component';

describe('OnlineCompilersComponent', () => {
  let component: OnlineCompilersComponent;
  let fixture: ComponentFixture<OnlineCompilersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCompilersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCompilersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
