import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email: string = ""
senha: string = ""

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  login(){
if(this.auth.login(this.email, this.senha)){

  this.route.navigate(["pagina-protegida"])
  return;

}
alert("Login Inválido")
this.senha = ""
this.email = ""
  }

}
