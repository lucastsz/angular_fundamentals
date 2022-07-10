import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacaoTextoComponent } from './components/interpolacao-texto/interpolacao-texto.component';
import { IntroducaoComponent } from './components/introducao/introducao.component';
import { PipeComponentComponent } from './components/pipe-component/pipe-component.component';
import { MultiplicaPorPipe } from './pipes/multiplica-por/multiplica-por.pipe';
import { PropertyBindingAndEventBindingComponent } from './components/property-binding-and-event-binding/property-binding-and-event-binding.component';
import { ToWayDataBindingComponent } from './components/to-way-data-binding/to-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizarListasComponent } from './components/renderizar-listas/renderizar-listas.component';
import { ComponentePaiComponent } from './components/comunicacao-dois-component/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/comunicacao-dois-component/componente-filho/componente-filho.component';
import { ServiceComponentComponent } from './components/service-component/service-component.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { NavComponent } from './components/nav/nav.component';
import { AcessarParametrosUrlComponent } from './components/acessar-parametros-url/acessar-parametros-url.component';
import { PaginaProtegidaComponent } from './components/pagina-protegida/pagina-protegida.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolacaoTextoComponent,
    IntroducaoComponent,
    PipeComponentComponent,
    MultiplicaPorPipe,
    PropertyBindingAndEventBindingComponent,
    ToWayDataBindingComponent,
    RenderizarListasComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ServiceComponentComponent,
    NgContentComponent,
    NavComponent,
    AcessarParametrosUrlComponent,
    PaginaProtegidaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
