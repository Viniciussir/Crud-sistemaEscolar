import { Curso } from './../curso/curso';
import { Aluno } from '../aluno/aluno';

export class Matricula  { 
    codigo?: string = "";
    aluno: Aluno = new Aluno();
    listaCurso: Curso[] = [];  
    
}