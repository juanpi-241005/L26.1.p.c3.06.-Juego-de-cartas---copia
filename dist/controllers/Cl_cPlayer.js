import Cl_mPlayer from "../models/Cl_mPlayer.js";
export default class Cl_cPlayer {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarPlayer(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        const error = this.validarInputs();
        if (error) {
            alert(error);
            return;
        }
        this.callback(new Cl_mPlayer({
            nombre: this.vista.nombre,
            carta1: this.vista.carta1,
            carta2: this.vista.carta2,
            carta3: this.vista.carta3,
        }));
        this.vista.ocultar();
    }
    validarInputs() {
        const nombre = this.vista.nombre?.trim();
        if (!nombre)
            return "El nombre es obligatorio.";
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
//# sourceMappingURL=Cl_cPlayer.js.map