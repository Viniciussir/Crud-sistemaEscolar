import { AlunoServiceService } from './../aluno-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-incluir',
  templateUrl: './aluno-incluir.component.html',
  styleUrls: ['./aluno-incluir.component.css']
})
export class AlunoIncluirComponent implements OnInit {

  aluno: Aluno = {
    nome: '',
    dataNascimento: new Date()
  }

  constructor(
    private router: Router,
    private alunoService: AlunoServiceService
  ) { }

  ngOnInit(): void {
  }

  incluir(){
    this.alunoService.incluir(this.aluno)
      .subscribe(data => {
        this.router.navigate(['/aluno']);
        alert("Aluno adicionado com sucesso!");
        console.log(data)
      })
          

  }

}
