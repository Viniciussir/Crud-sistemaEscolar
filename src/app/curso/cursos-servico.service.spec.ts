import { TestBed } from '@angular/core/testing';

import { CursosServicoService } from './cursos-servico.service';

describe('CursosServicoService', () => {
  let service: CursosServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
