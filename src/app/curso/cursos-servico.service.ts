import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Curso } from './curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosServicoService {
  
  constructor(
    private http: HttpClient
  ) {}    
     
  pesquisar(nome:string){
    return this.http.get("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/consultar/"+nome);
  }

  incluir(curso: Curso){        
    return this.http.post("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/incluir", curso);
  }

  alterar(curso: Curso){        
    return this.http.patch("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/alterarparcial", curso);
  }

  remover(curso: Curso){      
    return this.http.post("https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/remover", curso);    
  }

   
}