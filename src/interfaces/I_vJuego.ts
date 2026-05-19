import Cl_mPlayer from "../models/Cl_mPlayer";

export interface I_vJuego {
 
  onNuevoPlayer(callback: () => void): void;
  mostrarPlayers({
    players,
    cntPlayers,
    nombreUltimo,
    nombresMayores,
    metodosUsados
  }: {
    players: Cl_mPlayer[];
    cntPlayers: number;
    nombreUltimo: string;
    nombresMayores: string[];
    metodosUsados: string;
  }): void;
}
