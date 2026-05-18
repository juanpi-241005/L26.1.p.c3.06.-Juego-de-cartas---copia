/**
 * 6. JUEGO DE CARTAS
En el juego a cada participante se le entregan 3 cartas numeradas del 1 al 12, gana quien
sume mayor puntuación.
 * Se desea conocer
 * a) la puntuación de cada participante,
 * b) el nombre del ganador,
 * c) el porcentaje de jugadores con menos de 10 puntos.
 *
 * Se tiene que el formato para la salida de los requerimientos solicitados es:
 * El participante Juan tiene una puntuación de 8
 * El participante José tiene una puntuación de 14
 * El participante Rosa tiene una puntuación de 27
 * Nombre del ganador: Rosa
 * Porcentaje de jugadores con menos de 10 puntos:33.33%
 * La salida corresponde a los siguientes datos del participante (nombre, carta1, carta2, carta3):
 * (Juan,1,5,2) (José, 12,1,1) (Rosa, 10,9,8). */
import Cl_mJuego from "../models/Cl_mJuego.js";
export default class Cl_cJuego {
    mJuego = new Cl_mJuego();
    vJuego;
    cPlayer;
    constructor(vistaJuego, controladorPlayer) {
        this.vJuego = vistaJuego;
        this.cPlayer = controladorPlayer;
        this.vJuego.onNuevoPlayer(() => this.procesar1Player());
    }
    procesar1Player() {
        this.cPlayer.solicitarPlayer((player) => {
            if (player !== null) {
                this.mJuego.agregarPlayer(player);
                this.vJuego.mostrarPlayers({
                    players: this.mJuego.players,
                    cntPlayers: this.mJuego.cantidadPlayers(),
                    valorUltiCarta: this.mJuego.valorUltimaCarta(),
                    valorMayoresCartas: this.mJuego.nombreCartasMayoresQueUltimaCarta(),
                });
            }
        });
    }
}
//# sourceMappingURL=Cl_cJuego.js.map