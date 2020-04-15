import { TestBed } from '@angular/core/testing';

import { MotionDataUploadService } from './motion-data-upload.service';

describe('MotionDataUploadService', () => {
  let service: MotionDataUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotionDataUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
