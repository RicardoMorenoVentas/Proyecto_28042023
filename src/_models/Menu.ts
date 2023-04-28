export class Menu {
  private _nombreOut: string;
  private _url: string;
  private _icono: string;

  constructor(nombre : string, url : string, iconoURL : string){
    this._nombreOut = nombre;
    this._url = url;
    this._icono = iconoURL;
  }

  public get icono(): string {
    return this._icono;
  }
  public set icono(value: string) {
    this._icono = value;
  }
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }
  public get nombreOut(): string {
    return this._nombreOut;
  }
  public set nombreOut(value: string) {
    this._nombreOut = value;
  }
}
