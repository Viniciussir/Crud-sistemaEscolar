import { Component, OnInit } from '@angular/core';

import { Curso } from './curso';
import { Router } from '@angular/router';
import { CursosServicoService } from './cursos-servico.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

    nome:string = '';
    curso:Curso = new Curso();
    listaCurso: Curso[] = [];

    elementSelecionado:string = '';
    

  constructor(
    private router: Router,
    private cursoService: CursosServicoService,
  ) { }

  formatData(data:any):Curso[]{​​​​​​​​​
    return <Curso[]>JSON.parse(data.contents);  
      }​​​​​​​​​​​​​​​​

  ngOnInit(): void {
    this.cursoService.pesquisar(this.curso.nome)
    .subscribe(data=> {​​​​​​​​​​​​​​​​
      this.listaCurso=this.formatData(data);
      console.log(this.listaCurso)
              }​​​​​​​​​​​​​​​​
            )       
}
consultar(cursoPesquisa:string){
  this.cursoService.pesquisar(cursoPesquisa)
  .subscribe(data => {
    this.listaCurso = this.formatData(data);
  })

}
selecionar(cursoSelecionado:string){
    this.elementSelecionado = cursoSelecionado;
}

navegarAlterar(){
    this.router.navigate([`/curso/alterar/${this.elementSelecionado}`]);
}

remover(){
    this.cursoService.remover(this.curso)
      .subscribe(data => {
        alert("Os dados do curso serão deletados em até 5 minutos!");
        console.log(data)
  })

  
}

}

