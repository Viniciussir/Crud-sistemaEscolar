import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoAlterarComponent } from './curso/curso-alterar/curso-alterar.component';
import { CursoIncluirComponent } from './curso/curso-incluir/curso-incluir.component';
import { CursoComponent } from './curso/curso.component';

import { AlunoIncluirComponent } from './aluno/aluno-incluir/aluno-incluir.component';
import { AlunoAlterarComponent } from './aluno/aluno-alterar/aluno-alterar.component';
import { AlunoComponent } from './aluno/aluno.component';

import { MatriculaIncluirComponent } from './matricula/matricula-incluir/matricula-incluir.component';
import { MatriculaComponent } from './matricula/matricula.component';

const routes: Routes = [
   { path: 'curso' , component: CursoComponent },
   { path: 'curso/alterar/:id' , component: CursoAlterarComponent },
   { path: 'curso/incluir' , component: CursoIncluirComponent },

   
   { path: 'aluno' , component: AlunoComponent },
   { path: 'aluno/alterar/:id' , component: AlunoAlterarComponent },
   { path: 'aluno/incluir' , component: AlunoIncluirComponent },

   { path: 'matricula' , component: MatriculaComponent },
   { path: 'matricula/incluir' , component: MatriculaIncluirComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
