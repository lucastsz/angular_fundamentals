import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pagina-protegida',
  templateUrl: './pagina-protegida.component.html',
  styleUrls: ['./pagina-protegida.component.css']
})
export class PaginaProtegidaComponent implements OnInit {

  constructor(private auth: AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
    this.route.navigate(["login"])
  }

}
