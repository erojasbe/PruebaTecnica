import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NotasComponent } from './components/notas/notas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ToDoService } from './services/to-do.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsuarioComponent,
    NotasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
