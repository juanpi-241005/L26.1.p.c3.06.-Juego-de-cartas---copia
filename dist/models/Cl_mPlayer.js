import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mPlayer extends Cl_mPersona {
    _carta1 = 0;
    _carta2 = 0;
    _carta3 = 0;
    constructor({ nombre, carta1, carta2, carta3, }) {
        super({ nombre });
        this.carta1 = carta1;
        this.carta2 = carta2;
        this.carta3 = carta3;
    }
    set carta1(carta1) {
        this._carta1 = +carta1;
    }
    get carta1() {
        return this._carta1;
    }
    set carta2(carta2) {
        this._carta2 = +carta2;
    }
    get carta2() {
        return this._carta2;
    }
    set carta3(carta3) {
        this._carta3 = +carta3;
    }
    get carta3() {
        return this._carta3;
    }
    get puntos() {
        return this.carta1 + this.carta2 + this.carta3;
    }
}
//# sourceMappingURL=Cl_mPlayer.js.map