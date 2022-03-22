import { TestBed } from '@angular/core/testing';

import { RemotoService } from './remoto.service';

describe('RemotoService', () => {
  let service: RemotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

