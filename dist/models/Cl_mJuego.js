export default class Cl_mJuego {
    players = [];
    agregarPlayer(player) {
        this.players.push(player);
    }
    cantidadPlayers() {
        return this.players.length;
    }
    valorUltimaCarta() {
        if (this.players.length === 0)
            return 0;
        return this.players[this.players.length - 1].carta3;
    }
    nombreCartasMayoresQueUltimaCarta() {
        let nombres = [];
        const valorCartaFinal = this.valorUltimaCarta();
        for (let i = 0; i < this.players.length; i++) {
            let player = this.players[i];
            if (player.carta1 > valorCartaFinal ||
                player.carta2 > valorCartaFinal ||
                player.carta3 > valorCartaFinal) {
                nombres[nombres.length] = player.nombre;
            }
        }
        return nombres;
    }
}
//# sourceMappingURL=Cl_mJuego.js.map