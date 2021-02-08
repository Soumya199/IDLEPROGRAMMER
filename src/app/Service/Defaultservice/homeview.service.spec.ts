import { TestBed } from '@angular/core/testing';

import { HomeviewService } from './homeview.service';

describe('HomeviewService', () => {
  let service: HomeviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
