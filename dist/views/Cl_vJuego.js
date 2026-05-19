const html = String.raw;
export default class Cl_vJuego {
    lblCntPlayers;
    lblNombreUltimo;
    lblNombresMayores;
    lblMetodosUsados;
    btNuevoPlayer;
    tbPlayers;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        if (!this.vista)
            throw new Error("Elemento 'body' no encontrado en DOM");
        this.btNuevoPlayer = document.getElementById("body_btNuevoPlayer");
        if (!this.btNuevoPlayer)
            throw new Error("Elemento 'body_btNuevoPlayer' no encontrado en DOM");
        this.lblCntPlayers = document.getElementById("body_lblCntPlayers");
        if (!this.lblCntPlayers)
            throw new Error("Elemento 'body_lblCntPlayers' no encontrado en DOM");
        this.lblNombreUltimo = document.getElementById("body_lblNombreUltimo");
        if (!this.lblNombreUltimo)
            throw new Error("Elemento 'body_lblNombreUltimo' no encontrado en DOM");
        this.lblNombresMayores = document.getElementById("body_lblNombresMayores");
        if (!this.lblNombresMayores)
            throw new Error("Elemento 'body_lblNombresMayores' no encontrado en DOM");
        this.lblMetodosUsados = document.getElementById("body_lblMetodosUsados");
        if (!this.lblMetodosUsados)
            throw new Error("Elemento 'body_lblMetodosUsados' no encontrado en DOM");
        this.tbPlayers = document.getElementById("body_players");
        if (!this.tbPlayers)
            throw new Error("Elemento 'body_players' no encontrado en DOM");
    }
    onNuevoPlayer(callback) {
        this.btNuevoPlayer.onclick = callback;
    }
    mostrarPlayers({ players, cntPlayers, nombreUltimo, nombresMayores, metodosUsados }) {
        this.tbPlayers.innerHTML = "";
        players.forEach((player) => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
        <td>${player.nombre}</td>
        <td>${player.carta1}</td>
        <td>${player.carta2}</td>
        <td>${player.carta3}</td>
        <td>${player.puntos}</td>
      `;
            this.tbPlayers.appendChild(tr);
        });
        this.lblCntPlayers.innerHTML = cntPlayers.toString();
        this.lblNombreUltimo.innerHTML = nombreUltimo;
        this.lblNombresMayores.innerHTML = Array.isArray(nombresMayores) && nombresMayores.length > 0
            ? nombresMayores.join(", ")
            : "Ninguno";
        this.lblMetodosUsados.innerHTML = metodosUsados;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vJuego.js.map