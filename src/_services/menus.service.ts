import { Injectable } from '@angular/core';
import { Menu } from 'src/_models/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  private _menus: Array<Menu> = [
    new Menu('Inicio','','home'),
    new Menu('Buscar','/buscar','search'),
    new Menu('Registrar','/registrar','how_to_reg'),
    new Menu('Registrar E.','/registrar-e','inventory'),
    new Menu('Registrar W.','/registrar-w','view_carousel'),
    new Menu('Especialidades','/especialidades','contact_emergency'),
    new Menu('Médicos','/medicos','visibility'),
    new Menu('Exámenes','/examenes','assignment'),
    new Menu('Pacientes','/pacientes','accessibility_new'),
    new Menu('Reportes','/reportes','summarize'),

  ];

  constructor() { }

  public get menus(): Array<Menu> {
    return this._menus;
  }
  public set menus(value: Array<Menu>) {
    this._menus = value;
  }
}
