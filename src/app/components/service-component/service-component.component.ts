import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {

nome = "";

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  adicionarNome(){
if(this.nome.length == 0){
  alert("preencha o campo")
} else {
  this.logger.logar(this.nome)
  alert(`Nome ${this.nome} cadastrado com sucesso!`);
}

   
  }

  exibeCadastros(){
    
    this.logger.exibeTodosOsLogs()
  }
}
