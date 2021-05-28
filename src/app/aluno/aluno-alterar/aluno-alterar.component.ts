import { Router, ActivatedRoute } from '@angular/router';
import { AlunoServiceService } from './../aluno-service.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-alterar',
  templateUrl: './aluno-alterar.component.html',
  styleUrls: ['./aluno-alterar.component.css']
})
export class AlunoAlterarComponent implements OnInit {

  aluno:Aluno = new Aluno();

  constructor(
    private alunoService : AlunoServiceService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const name = this.getName();
    this.alunoService.pesquisar(name)
    .subscribe(data => {
      this.aluno = this.formatData(data)
    }
    )
  }
  getName(): string{
    return <string>this.route.snapshot.paramMap.get('id');
  }

  formatData(data:any):Aluno{​​​​​​​​​
    return <Aluno>JSON.parse(data.contents)[0];
      }​​​​​​​​​​​​​​​​

      alterar(){
        this.alunoService.alterar(this.aluno)
          .subscribe(data => {
            this.router.navigate(['/aluno']);
            alert("Aluno alterado com sucesso!");
            console.log(data)
          })

        }

}
