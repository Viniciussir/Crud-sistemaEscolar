import { CursosServicoService } from './curso/cursos-servico.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { CursoAlterarComponent } from './curso/curso-alterar/curso-alterar.component';
import { CursoIncluirComponent } from './curso/curso-incluir/curso-incluir.component';


import { HttpClientModule } from '@angular/common/http';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoAlterarComponent } from './aluno/aluno-alterar/aluno-alterar.component';
import { AlunoIncluirComponent } from './aluno/aluno-incluir/aluno-incluir.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { MatriculaIncluirComponent } from './matricula/matricula-incluir/matricula-incluir.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
  
    CursoComponent,
    CursoAlterarComponent,
    CursoIncluirComponent,

    AlunoComponent,
    AlunoAlterarComponent,
    AlunoIncluirComponent,
    
    MatriculaComponent,
    MatriculaIncluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    CursosServicoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
