import { Router } from '@angular/router';
import { CursosServicoService } from './../cursos-servico.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-curso-incluir',
  templateUrl: './curso-incluir.component.html',
  styleUrls: ['./curso-incluir.component.css']
})
export class CursoIncluirComponent implements OnInit {
 
  curso: Curso = {
    nome: '',
    cargaHoraria: 0,
    dataInicio: new Date(),
    instrutor: '',
    local:''
  }

  constructor(
    private router: Router,
    private cursoService: CursosServicoService

  ) { }

  ngOnInit(): void {
  }

  incluir(){
    this.cursoService.incluir(this.curso)
      .subscribe(data => {
        this.router.navigate(['/curso']);
        alert("Curso incluido com sucesso!");
        console.log(data)
      })
          

  }
  
}
