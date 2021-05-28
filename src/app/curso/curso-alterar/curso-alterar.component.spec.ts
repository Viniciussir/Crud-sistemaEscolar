import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAlterarComponent } from './curso-alterar.component';

describe('CursoAlterarComponent', () => {
  let component: CursoAlterarComponent;
  let fixture: ComponentFixture<CursoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
