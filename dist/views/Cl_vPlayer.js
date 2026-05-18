export default class Cl_vPlayer {
    inNombre;
    btCancelar;
    btAceptar;
    vista;
    inCarta1;
    inCarta2;
    inCarta3;
    constructor() {
        const vistaEl = document.getElementById("player");
        if (!vistaEl)
            throw new Error("Elemento 'player' no encontrado en DOM");
        this.vista = vistaEl;
        this.inNombre = document.getElementById("player_inNombre");
        if (!this.inNombre)
            throw new Error("Elemento 'player_inNombre' no encontrado en DOM");
        this.inCarta1 = document.getElementById("player_inCarta1");
        if (!this.inCarta1)
            throw new Error("Elemento 'player_inCarta1' no encontrado en DOM");
        this.inCarta2 = document.getElementById("player_inCarta2");
        if (!this.inCarta2)
            throw new Error("Elemento 'player_inCarta2' no encontrado en DOM");
        this.inCarta3 = document.getElementById("player_inCarta3");
        if (!this.inCarta3)
            throw new Error("Elemento 'player_inCarta3' no encontrado en DOM");
        this.btCancelar = document.getElementById("player_btCancelar");
        if (!this.btCancelar)
            throw new Error("Elemento 'player_btCancelar' no encontrado en DOM");
        this.btAceptar = document.getElementById("player_btAceptar");
        if (!this.btAceptar)
            throw new Error("Elemento 'player_btAceptar' no encontrado en DOM");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get carta1() {
        return this.inCarta1 ? +this.inCarta1.value : 0;
    }
    get carta2() {
        return this.inCarta2 ? +this.inCarta2.value : 0;
    }
    get carta3() {
        return this.inCarta3 ? +this.inCarta3.value : 0;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vPlayer.js.map