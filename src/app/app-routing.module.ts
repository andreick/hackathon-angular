import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then((module) => module.HomeModule) },
  { path: 'usuarios', loadChildren: () => import('./components/usuarios/usuarios.module').then((module) => module.UsuariosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
