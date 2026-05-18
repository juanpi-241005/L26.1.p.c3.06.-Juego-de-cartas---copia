import Cl_mPlayer from "../models/Cl_mPlayer";

export interface I_vJuego {
 
  onNuevoPlayer(callback: () => void): void;
  mostrarPlayers({
    players,
    cntPlayers,
    valorUltiCarta,
    valorMayoresCartas,
  }: {
    players: Cl_mPlayer[];
    cntPlayers: number;
    valorUltiCarta: number;
    valorMayoresCartas: string[];
  }): void;
}
