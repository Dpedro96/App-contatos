import { Injectable } from '@angular/core';
import Contato from '../entities/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  listaContatos : Contato[] = [];
  constructor() {   
    let c1: Contato = new Contato("Pedro Alvarez Cabral", 998307115);
    let c2: Contato = new Contato("Ezequiel Lucios", 998308868);
    let c3: Contato = new Contato("Bruno Caboclo", 998544545);
    this.listaContatos.push(c1);
    this.listaContatos.push(c2);
    this.listaContatos.push(c3);
  }

  cadastrar(contato: Contato){
    this.listaContatos.push(contato);
  }

  obterTodos(): Contato[]{
    return this.listaContatos;
  }

  obterPorIndice(indice: number){
    return this.listaContatos[indice];
  }
}
