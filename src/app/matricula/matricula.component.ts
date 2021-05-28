import { Aluno } from './../aluno/aluno';
import { MatriculaServiceService } from './matricula-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matricula } from './matricula';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  nome:string = '';
  matricula:Matricula = new Matricula();
  listaMatricula: Matricula[] = [];
  

  elementSelecionado:string = '';

  constructor(
    private router: Router,
    private matriculaService: MatriculaServiceService
  ) { }

  formatData(data:any):Matricula[]{​​​​​​​​​
    return <Matricula[]>JSON.parse(data.contents);  
      }​​​​​​​​​​​​​​​​

  ngOnInit(): void {
    
    this.matriculaService.pesquisar(this.nome)
    .subscribe(data=> {​​​​​​​​​​​​​​​​
      this.listaMatricula = this.formatData(data);
              }​​​​​​​​​​​​​​​​
            ) 
            
  }

  consultar(matriculaPesquisa:string){
    this.matriculaService.pesquisar(matriculaPesquisa)
    .subscribe(data => {
      this.listaMatricula = this.formatData(data);
      console.log(data);
    })
  
  }
  selecionar(matriculaSelecionada:string){
      this.elementSelecionado = matriculaSelecionada;
  }
  
  navegarAlterar(){
      this.router.navigate([`/matricula/alterar/${this.elementSelecionado}`]);
  }
  
  remover(){
      this.matriculaService.remover(this.matricula)
        .subscribe(data => {
          alert("Os dados do aluno serão deletados em até5 minutos!");
          console.log(data)
    })
  
    
  }

}
