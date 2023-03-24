import { TestBed } from '@angular/core/testing';

import { SiteTimerService } from './site-timer.service';

describe('SiteTimerService', () => {
  let service: SiteTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
