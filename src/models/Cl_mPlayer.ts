import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mPlayer extends Cl_mPersona {
  private _carta1: number = 0;
  private _carta2: number = 0;
  private _carta3: number = 0;

   constructor({
    nombre,
    carta1,
    carta2,
    carta3,
  }: {
    nombre: string;
    carta1: number;
    carta2: number;
    carta3: number;
  }) {
    super({ nombre });
    this.carta1 = carta1;
    this.carta2 = carta2;
    this.carta3 = carta3;    
  }

    set carta1(carta1: number) {
    this._carta1 = +carta1;
  }
  get carta1(): number {
    return this._carta1;
  }

    set carta2(carta2: number) {
    this._carta2 = +carta2;
  }
  get carta2(): number {
    return this._carta2;
  }

    set carta3(carta3: number) {
    this._carta3 = +carta3;
  }
  get carta3(): number {
    return this._carta3;
  }

  get puntos(): number {
    return this.carta1 + this.carta2 + this.carta3;
  }

}