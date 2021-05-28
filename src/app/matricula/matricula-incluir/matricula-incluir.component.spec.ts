import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaIncluirComponent } from './matricula-incluir.component';

describe('MatriculaIncluirComponent', () => {
  let component: MatriculaIncluirComponent;
  let fixture: ComponentFixture<MatriculaIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
