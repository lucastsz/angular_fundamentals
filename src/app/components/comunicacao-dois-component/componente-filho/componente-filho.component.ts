import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent implements OnInit {

  @Input() nome = ""
 @Output() mostraNome = new EventEmitter();
 sobrenome = ""

  constructor() { }

  ngOnInit(): void {
  }

}
