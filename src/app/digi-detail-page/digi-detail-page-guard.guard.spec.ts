import { TestBed } from '@angular/core/testing';

import { DigiDetailPageGuardGuard } from './digi-detail-page-guard.guard';

describe('DigiDetailPageGuardGuard', () => {
  let guard: DigiDetailPageGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DigiDetailPageGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
