import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from './componentes/template/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/template/rodape/rodape.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LivrosCrudComponent } from './paginas/livros-crud/livros-crud.component';
import { LivrosCadastroComponent } from './paginas/livros-cadastro/livros-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LivrosEditarComponent } from './paginas/livros-editar/livros-editar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    InicioComponent,
    LivrosCrudComponent,
    LivrosCadastroComponent,
    LivrosEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    FilterPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
