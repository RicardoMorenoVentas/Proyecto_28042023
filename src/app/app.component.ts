import { Component } from '@angular/core';
import { MenusService } from 'src/_services/menus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_28042023';

  constructor(private _servicio: MenusService){}

  public get servicio(): MenusService {
    return this._servicio;
  }
  public set servicio(value: MenusService) {
    this._servicio = value;
  }
}
