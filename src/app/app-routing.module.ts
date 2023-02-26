import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then((module) => module.HomeModule) },
  {
    path: 'usuarios',
    loadChildren: () => import('./components/usuarios/usuarios.module').then((module) => module.UsuariosModule),
    canLoad: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
