import { TestBed } from '@angular/core/testing';

import { BuglogService } from './buglog.service';

describe('BuglogService', () => {
  let service: BuglogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuglogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
