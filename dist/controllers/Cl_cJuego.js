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
import Cl_mPlayer from "../models/Cl_mPlayer.js";
export default class Cl_cJuego {
    mJuego = new Cl_mJuego();
    vJuego;
    cPlayer;
    constructor(vistaJuego, controladorPlayer) {
        this.vJuego = vistaJuego;
        this.cPlayer = controladorPlayer;
        // Conectamos el botón de la vista con el controlador secundario
        this.vJuego.onNuevoPlayer(() => this.procesar1Player());
        // Cargamos los datos en duro exigidos apenas arranca
        this.cargarDatosHardcoded();
    }
    cargarDatosHardcoded() {
        const player1 = new Cl_mPlayer({ nombre: "Juan", carta1: 1, carta2: 5, carta3: 2 });
        const player2 = new Cl_mPlayer({ nombre: "José", carta1: 12, carta2: 1, carta3: 1 });
        const player3 = new Cl_mPlayer({ nombre: "Rosa", carta1: 10, carta2: 9, carta3: 8 });
        this.mJuego.agregarPlayer(player1);
        this.mJuego.agregarPlayer(player2);
        this.mJuego.agregarPlayer(player3);
        this.actualizarReporte();
    }
    procesar1Player() {
        this.cPlayer.solicitarPlayer((player) => {
            if (player !== null) {
                this.mJuego.agregarPlayer(player);
                this.actualizarReporte();
            }
        });
    }
    actualizarReporte() {
        let ultimo = this.mJuego.ultimoPlayer();
        let nombreUltimo = ultimo ? ultimo.nombre : "Desconocido";
        // Pasamos el paquete completo a la vista
        this.vJuego.mostrarPlayers({
            players: this.mJuego.players,
            cntPlayers: this.mJuego.cantidadPlayers(),
            nombreUltimo: nombreUltimo,
            nombresMayores: this.mJuego.nombreCartasMayoresQueUltimaCarta(),
            metodosUsados: "push, length, forEach (Ciclos base en modelo)"
        });
    }
}
//# sourceMappingURL=Cl_cJuego.js.map