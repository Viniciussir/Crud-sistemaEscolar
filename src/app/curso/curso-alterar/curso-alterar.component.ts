import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CursosServicoService } from './../cursos-servico.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-curso-alterar',
  templateUrl: './curso-alterar.component.html',
  styleUrls: ['./curso-alterar.component.css']
})
export class CursoAlterarComponent implements OnInit {

  curso:Curso = new Curso();

  constructor(
    private cursoService : CursosServicoService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

    ngOnInit(): void {
      const name = this.getName();
      this.cursoService.pesquisar(name)
      .subscribe(data => {
        this.curso = this.formatData(data)
      }
      )
  }

  getName(): string{
    return <string>this.route.snapshot.paramMap.get('id');
  }

  formatData(data:any):Curso{​​​​​​​​​
    return <Curso>JSON.parse(data.contents)[0];
      }​​​​​​​​​​​​​​​​

      alterar(){
        this.cursoService.alterar(this.curso)
          .subscribe(data => {
            this.router.navigate(['/curso']);
            alert("Curso alterado com sucesso!");
            console.log(data)
          })

        }
      }
