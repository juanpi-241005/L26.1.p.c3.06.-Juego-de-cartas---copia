import Cl_mPlayer from "./Cl_mPlayer.js";

export default class Cl_mJuego {
  public players: Cl_mPlayer[] = [];

  agregarPlayer(player: Cl_mPlayer) {
    this.players.push(player);
  }

  cantidadPlayers() {
    return this.players.length;
  }

  ultimoPlayer(): Cl_mPlayer | null {
    if (this.players.length === 0) return null;
    return this.players [this.players.length- 1];
  }

  nombreCartasMayoresQueUltimaCarta(): string[] {
    let nombres: string[] = [];
    let ultimo = this.ultimoPlayer();
    if(ultimo === null) return nombres;

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