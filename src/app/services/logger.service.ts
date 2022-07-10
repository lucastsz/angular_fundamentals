import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

mensagens: string[] = [];
qtd: number = 0;

  logar(mensagem: string){
    this.qtd++;
this.mensagens.push(mensagem)
  }

  exibeTodosOsLogs(){
    if(this.qtd === 0){
alert("não possui nenhum nome cadastrado")
    } else{
      alert(this.mensagens)
    }
    
  }


  constructor() { }
}
