import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LivrosCadastroComponent } from './paginas/livros-cadastro/livros-cadastro.component';
import { LivrosCrudComponent } from './paginas/livros-crud/livros-crud.component';
import { LivrosEditarComponent } from './paginas/livros-editar/livros-editar.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'livros/listagem',
    component: LivrosCrudComponent,
  },
  {
    path: 'livros/cadastro',
    component: LivrosCadastroComponent,
  },
  {
    path: 'livros/editar/:id',
    component: LivrosEditarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
