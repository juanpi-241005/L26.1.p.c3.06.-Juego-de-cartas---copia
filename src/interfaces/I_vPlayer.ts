export interface I_vPlayer {
  nombre: string;
  carta1: number;
  carta2: number;
  carta3: number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
