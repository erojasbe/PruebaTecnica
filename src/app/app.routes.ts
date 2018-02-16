import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioComponent } from './components/inicio/inicio.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NotasComponent } from './components/notas/notas.component';


const ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'notas', component: NotasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
