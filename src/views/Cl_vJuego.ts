import { I_vJuego } from "../interfaces/I_vJuego";
import Cl_mPlayer from "../models/Cl_mPlayer";

const html = String.raw;

export default class Cl_vJuego implements I_vJuego {
  lblCntPlayers: HTMLLabelElement;
  lblValorUltiCarta: HTMLLabelElement;
  lblValorMayoresCartas: HTMLLabelElement;
  btNuevoPlayer: HTMLButtonElement;
  tbPlayers: HTMLTableElement;
  vista: HTMLElement | null;

   constructor() {
    this.vista = document.getElementById("body");
      if (!this.vista) throw new Error("Elemento 'body' no encontrado en DOM");

      this.btNuevoPlayer = document.getElementById("body_btNuevoPlayer") as HTMLButtonElement;
      if (!this.btNuevoPlayer) throw new Error("Elemento 'body_btNuevoPlayer' no encontrado en DOM");

      this.lblCntPlayers = document.getElementById("body_lblCntPlayers") as HTMLLabelElement;
      if (!this.lblCntPlayers) throw new Error("Elemento 'body_lblCntPlayers' no encontrado en DOM");

      this.lblValorUltiCarta = document.getElementById("body_lblValorUltiCarta") as HTMLLabelElement;
      if (!this.lblValorUltiCarta) throw new Error("Elemento 'body_lblValorUltiCarta' no encontrado en DOM");

      this.lblValorMayoresCartas = document.getElementById("body_lblValorMayoresCartas") as HTMLLabelElement;
      if (!this.lblValorMayoresCartas) throw new Error("Elemento 'body_lblValorMayoresCartas' no encontrado en DOM");

      this.tbPlayers = document.getElementById("body_players") as HTMLTableElement;
      if (!this.tbPlayers) throw new Error("Elemento 'body_players' no encontrado en DOM");
  }

  onNuevoPlayer(callback: () => void): void {
    this.btNuevoPlayer.onclick = callback;
  }

  mostrarPlayers({
    players,
    cntPlayers,
    valorUltiCarta,
    valorMayoresCartas,
  }: {
    players: Cl_mPlayer[];
    cntPlayers: number;
    valorUltiCarta: number;
    valorMayoresCartas: string[];
  }): void {
    this.tbPlayers.innerHTML = "";
    players.forEach((player) => {
      const tr = document.createElement("tr");
      tr.innerHTML = html`
        <td>${player.nombre}</td>
        <td>${player.carta1}</td>
        <td>${player.carta2}</td>
        <td>${player.carta3}</td>
        <td>${player.puntos}</td>
      `;
      this.tbPlayers.appendChild(tr);
    });
    this.lblCntPlayers.innerHTML = cntPlayers.toString();
    this.lblValorUltiCarta.innerHTML = valorUltiCarta.toString();
    this.lblValorMayoresCartas.innerHTML = Array.isArray(valorMayoresCartas)
      ? valorMayoresCartas.join(", ")
      : String(valorMayoresCartas);
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
