import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoIncluirComponent } from './curso-incluir.component';

describe('CursoIncluirComponent', () => {
  let component: CursoIncluirComponent;
  let fixture: ComponentFixture<CursoIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
