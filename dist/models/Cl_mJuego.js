export default class Cl_mJuego {
    players = [];
    agregarPlayer(player) {
        this.players.push(player);
    }
    cantidadPlayers() {
        return this.players.length;
    }
    ultimoPlayer() {
        if (this.players.length === 0)
            return null;
        return this.players[this.players.length - 1];
    }
    nombreCartasMayoresQueUltimaCarta() {
        let nombres = [];
        let ultimo = this.ultimoPlayer();
        if (ultimo === null)
            return nombres;
        let puntajeReferencia = ultimo.puntos;
        for (let i = 0; i < this.players.length; i++) {
            let playerActual = this.players[i];
            if (playerActual.puntos > puntajeReferencia) {
                nombres.push(playerActual.nombre);
            }
        }
        return nombres;
    }
}
//# sourceMappingURL=Cl_mJuego.js.map