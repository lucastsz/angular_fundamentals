import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acessar-parametros-url',
  templateUrl: './acessar-parametros-url.component.html',
  styleUrls: ['./acessar-parametros-url.component.css']
})
export class AcessarParametrosUrlComponent implements OnInit {


  id: number | null = 0;
  nome: string | null = "";
  idade: number | null = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    })
    this.route.queryParamMap.subscribe(params => {
      this.idade = Number(params.get("idade"));
      this.nome = params.get("nome");
    })
  }
}
