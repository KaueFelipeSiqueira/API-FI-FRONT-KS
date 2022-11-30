import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { QuestionarioComponent } from './components/questionario/questionario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { QuestoesComponent } from './components/questoes/questoes.component';
const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  {path:"questoes", component: QuestionarioComponent},

  { path:"Usuario", component: UsuarioComponent},
  { path:"Usuario/:id", component: UsuarioComponent},

  { path:"Questao", component: QuestoesComponent},
  { path:"Questao/:id", component: QuestoesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
