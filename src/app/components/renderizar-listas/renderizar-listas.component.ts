import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/types/Produto';

@Component({
  selector: 'app-renderizar-listas',
  templateUrl: './renderizar-listas.component.html',
  styleUrls: ['./renderizar-listas.component.css']
})
export class RenderizarListasComponent implements OnInit {

produtos: Produto[] = [
  {id: 1, valor: 60, tamanho: "M", descricao: "Vestido Longo",esgotado: false},
  {id: 2, valor: 55, tamanho: "G", descricao: "Vestido Curto",esgotado: false},
  {id: 3, valor: 80, tamanho: "P", descricao: "Vestido Rosa",esgotado: false},
  {id: 4, valor: 110, tamanho: "GG", descricao: "Vestido Verde",esgotado: true},
]

  constructor() { }

  ngOnInit(): void {
  }

}
