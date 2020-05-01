import { TestBed } from '@angular/core/testing';

import { FollowerserviceService } from './followerservice.service';

describe('FollowerserviceService', () => {
  let service: FollowerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
