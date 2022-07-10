import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao-texto',
  templateUrl: './interpolacao-texto.component.html',
  styleUrls: ['./interpolacao-texto.component.css']
})
export class InterpolacaoTextoComponent implements OnInit {

interpolacao: string = "variável interpolada"

  constructor() { }

  ngOnInit(): void {
  }

}
