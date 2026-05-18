import Cl_mPlayer from "./Cl_mPlayer.js";

export default class Cl_mJuego {
  public players: Cl_mPlayer[] = [];

  agregarPlayer(player: Cl_mPlayer) {
    this.players.push(player);
  }

  cantidadPlayers() {
    return this.players.length;
  }

  valorUltimaCarta(): number {
    if (this.players.length === 0) return 0;
    return this.players [this.players.length - 1]. carta3;
  }

  nombreCartasMayoresQueUltimaCarta(): string[] {
    let nombres: string[] = [];
    const valorCartaFinal = this.valorUltimaCarta();
    for (let i = 0; i < this.players.length; i++) {
      let player = this.players[i];
      if (
        player.carta1 > valorCartaFinal ||
        player.carta2 > valorCartaFinal ||
        player.carta3 > valorCartaFinal
      ) {
        nombres[nombres.length] = player.nombre;
      }
    }
    return nombres;
  }
}