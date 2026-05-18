import { I_vPlayer } from "../interfaces/I_vPlayer.js";
import Cl_mPlayer from "../models/Cl_mPlayer.js";

export default class Cl_cPlayer {
  private vista: I_vPlayer;
  private callback!: (player: Cl_mPlayer | null) => void;
  constructor(vista: I_vPlayer) {
    this.vista = vista;
    
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }
  
  solicitarPlayer(callback: (player: Cl_mPlayer | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    const error = this.validarInputs();
    if (error) {
      alert(error);
      return;
    }

    this.callback(
      new Cl_mPlayer({
        nombre: this.vista.nombre,
        carta1: this.vista.carta1,
        carta2: this.vista.carta2,
        carta3: this.vista.carta3,
      }),
    );
    this.vista.ocultar();
  }

  private validarInputs(): string | null {
    const nombre = this.vista.nombre?.trim();
    if (!nombre) return "El nombre es obligatorio.";

    const cartas = [this.vista.carta1, this.vista.carta2, this.vista.carta3];
    for (let i = 0; i < cartas.length; i++) {
      const v = cartas[i];
      if (!Number.isFinite(v) || v < 1 || v > 12) {
        return `Carta ${i + 1} debe estar entre 1 y 12.`;
      }
    }
    return null;
  }
}
