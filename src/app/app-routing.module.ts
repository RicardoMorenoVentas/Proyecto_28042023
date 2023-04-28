import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { RegistrarEComponent } from './registrar-e/registrar-e.component';
import { RegistrarWComponent } from './registrar-w/registrar-w.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'registrar-e', component: RegistrarEComponent },
  { path: 'registrar-w', component: RegistrarWComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: 'medicos', component: MedicosComponent },
  { path: 'examenes', component: ExamenesComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'reportes', component: ReportesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
