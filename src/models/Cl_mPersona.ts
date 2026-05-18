export default class Cl_mPersona {
  private _nombre: string = "";
  constructor({ nombre }: { nombre: string }) {
    this.nombre = nombre;
  }

  get nombre(): string {
    return this._nombre;
  }

    set nombre(value: string) {
    this._nombre = value;
  }

}