import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { BuscarComponent } from './buscar/buscar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { RegistrarEComponent } from './registrar-e/registrar-e.component';
import { RegistrarWComponent } from './registrar-w/registrar-w.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ReportesComponent } from './reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BuscarComponent,
    RegistrarComponent,
    ExamenesComponent,
    RegistrarEComponent,
    RegistrarWComponent,
    EspecialidadesComponent,
    MedicosComponent,
    PacientesComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
