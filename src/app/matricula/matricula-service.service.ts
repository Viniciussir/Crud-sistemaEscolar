import { Matricula } from './matricula';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatriculaServiceService {

  constructor(
    private http: HttpClient
  ) { }

    pesquisar(codigoAluno: string){
    return this.http.get("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/matricula/consultar/"+codigoAluno);
    }

    incluir(matricula: Matricula){
    return this.http.post("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/matricula/incluir", matricula);
    }

    remover(matricula: Matricula){
    return this.http.post("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/matricula/remover", matricula);
    }
}
