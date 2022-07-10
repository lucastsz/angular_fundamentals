import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AcessarParametrosUrlComponent } from './components/acessar-parametros-url/acessar-parametros-url.component';
import { ComponentePaiComponent } from './components/comunicacao-dois-component/componente-pai/componente-pai.component';
import { InterpolacaoTextoComponent } from './components/interpolacao-texto/interpolacao-texto.component';
import { IntroducaoComponent } from './components/introducao/introducao.component';
import { LoginComponent } from './components/login/login.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { PaginaProtegidaComponent } from './components/pagina-protegida/pagina-protegida.component';
import { PipeComponentComponent } from './components/pipe-component/pipe-component.component';
import { PropertyBindingAndEventBindingComponent } from './components/property-binding-and-event-binding/property-binding-and-event-binding.component';
import { RenderizarListasComponent } from './components/renderizar-listas/renderizar-listas.component';
import { ServiceComponentComponent } from './components/service-component/service-component.component';
import { ToWayDataBindingComponent } from './components/to-way-data-binding/to-way-data-binding.component';

const routes: Routes = [
  {path: "introducao", component: IntroducaoComponent},
  {path: "comunicacao-dois-component", component: ComponentePaiComponent},
  {path: "interpolacao-texto", component: InterpolacaoTextoComponent},
  {path: "ng-content", component: NgContentComponent},
  {path: "pipe-component", component: PipeComponentComponent},
  {path: "property-binding-and-event-binding", component: PropertyBindingAndEventBindingComponent},
  {path: "renderizar-listas", component: RenderizarListasComponent},
  {path: "service-component", component: ServiceComponentComponent},
  {path: "to-way-data-binding", component: ToWayDataBindingComponent},
  {path: "acessar-parametros-url/:id", component: AcessarParametrosUrlComponent},
  {path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [AuthGuard] },
  {path: "login", component: LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
