import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'lista-usuarios', pathMatch: 'full'},
  {path: 'lista-usuarios', component: ListaUsuariosComponent},
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  {path: 'editar-usuario/:id_usuario', component: CrearUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
