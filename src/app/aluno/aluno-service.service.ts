import { Aluno } from './aluno';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {

  constructor(
    private http: HttpClient,
  ) { }


    pesquisar(nome: string){
    return this.http.get("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/consultar/"+nome);
    }

    incluir(aluno: Aluno){
    return this.http.post("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/incluir", aluno);
    }

    alterar(aluno: Aluno){
    return this.http.patch("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/alterarparcial", aluno);
    }

    remover(aluno: Aluno){
    return this.http.post("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/remover", aluno);
    }
}
