import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NotasComponent } from './components/notas/notas.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsuarioComponent,
    NotasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
