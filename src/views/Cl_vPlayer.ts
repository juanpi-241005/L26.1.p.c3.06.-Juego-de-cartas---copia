import { I_vPlayer } from "../interfaces/I_vPlayer";

export default class Cl_vPlayer implements I_vPlayer {
  inNombre: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  inCarta1: HTMLInputElement;
  inCarta2: HTMLInputElement;
  inCarta3: HTMLInputElement;

  constructor() {
    const vistaEl = document.getElementById("player");
    if (!vistaEl) throw new Error("Elemento 'player' no encontrado en DOM");
    this.vista = vistaEl as HTMLElement;

    this.inNombre = document.getElementById("player_inNombre") as HTMLInputElement;
    if (!this.inNombre) throw new Error("Elemento 'player_inNombre' no encontrado en DOM");

    this.inCarta1 = document.getElementById("player_inCarta1") as HTMLInputElement;
    if (!this.inCarta1) throw new Error("Elemento 'player_inCarta1' no encontrado en DOM");

    this.inCarta2 = document.getElementById("player_inCarta2") as HTMLInputElement;
    if (!this.inCarta2) throw new Error("Elemento 'player_inCarta2' no encontrado en DOM");

    this.inCarta3 = document.getElementById("player_inCarta3") as HTMLInputElement;
    if (!this.inCarta3) throw new Error("Elemento 'player_inCarta3' no encontrado en DOM");

    this.btCancelar = document.getElementById("player_btCancelar") as HTMLButtonElement;
    if (!this.btCancelar) throw new Error("Elemento 'player_btCancelar' no encontrado en DOM");

    this.btAceptar = document.getElementById("player_btAceptar") as HTMLButtonElement;
    if (!this.btAceptar) throw new Error("Elemento 'player_btAceptar' no encontrado en DOM");
  }

   get nombre(): string {
    return this.inNombre.value.trim();
  }

  get carta1(): number {
    return this.inCarta1 ? +this.inCarta1.value : 0;
  }

  get carta2(): number {
    return this.inCarta2 ? +this.inCarta2.value : 0;
  }

  get carta3(): number {
    return this.inCarta3 ? +this.inCarta3.value : 0;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
