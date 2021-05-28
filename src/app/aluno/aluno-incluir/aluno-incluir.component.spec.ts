import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoIncluirComponent } from './aluno-incluir.component';

describe('AlunoIncluirComponent', () => {
  let component: AlunoIncluirComponent;
  let fixture: ComponentFixture<AlunoIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
