import { TestBed } from '@angular/core/testing';

import { MatriculaServiceService } from './matricula-service.service';

describe('MatriculaServiceService', () => {
  let service: MatriculaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
