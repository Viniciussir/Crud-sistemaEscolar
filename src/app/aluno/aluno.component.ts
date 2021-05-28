import { AlunoServiceService } from './aluno-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from './aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  nome:string = '';
  aluno:Aluno = new Aluno();
  listaAluno: Aluno[] = [];

  elementSelecionado:string = '';

  constructor(
    private router: Router,
    private alunoService: AlunoServiceService
  ) { }

  formatData(data:any):Aluno[]{​​​​​​​​​
    return <Aluno[]>JSON.parse(data.contents);  
      }​​​​​​​​​​​​​​​​

  ngOnInit(): void {
    this.alunoService.pesquisar(this.aluno.nome)
    .subscribe(data=> {​​​​​​​​​​​​​​​​
      this.listaAluno=this.formatData(data);
              }​​​​​​​​​​​​​​​​
            )
  }
  consultar(alunoPesquisa:string){
    this.alunoService.pesquisar(alunoPesquisa)
    .subscribe(data => {
      this.listaAluno = this.formatData(data);
    })
  }

  selecionar(alunoSelecionado:string){
    this.elementSelecionado = alunoSelecionado;
}

navegarAlterar(){
  this.router.navigate([`/aluno/alterar/${this.elementSelecionado}`]);
}

remover(){
  this.alunoService.remover(this.aluno)
    .subscribe(data => {
      alert("Os dados do aluno serão deletados em até5 minutos!");
      console.log(data)
})


}

}
