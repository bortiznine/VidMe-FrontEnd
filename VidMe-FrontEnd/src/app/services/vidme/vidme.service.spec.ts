import { TestBed } from '@angular/core/testing';

import { VidmeService } from './vidme.service';

describe('VidmeService', () => {
  let service: VidmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VidmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
