import { useState } from "react";

function App() {
  const [resultado, setResultado] = useState("");
  const [puntosJugador, setPuntosJugador] = useState(0);
  const [puntosCPU, setPuntosCPU] = useState(0);

  const opciones = ["piedra", "papel", "tijera"];

  const jugar = (eleccionJugador) => {
    const eleccionCPU = opciones[Math.floor(Math.random() * 3)];
    let mensaje = "";

    if (eleccionJugador === eleccionCPU) {
      mensaje = "🤝 ¡Empate!";
    } else if (
      (eleccionJugador === "piedra" && eleccionCPU === "tijera") ||
      (eleccionJugador === "papel" && eleccionCPU === "piedra") ||
      (eleccionJugador === "tijera" && eleccionCPU === "papel")
    ) {
      mensaje = "🎉 ¡Ganaste!";
      setPuntosJugador(puntosJugador + 1);
    } else {
      mensaje = "💻 ¡La CPU gana!";
      setPuntosCPU(puntosCPU + 1);
    }

    setResultado(
      `Tú elegiste ${eleccionJugador} | CPU eligió ${eleccionCPU} | ${mensaje}`
    );
  };

  return (
    <div style={styles.container}>
      <h1>🎮 Piedra, Papel o Tijera</h1>

      <div style={styles.botones}>
        <button style={styles.boton} onClick={() => jugar("piedra")}>
          🪨 Piedra
        </button>
        <button style={styles.boton} onClick={() => jugar("papel")}>
          📄 Papel
        </button>
        <button style={styles.boton} onClick={() => jugar("tijera")}>
          ✂️ Tijera
        </button>
      </div>

      <p style={styles.resultado}>{resultado}</p>

      <p style={styles.marcador}>
        Jugador: {puntosJugador} | CPU: {puntosCPU}
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    paddingTop: "50px",
    fontFamily: "Arial",
  },
  botones: {
    margin: "20px",
  },
  boton: {
    fontSize: "18px",
    padding: "12px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  resultado: {
    fontSize: "20px",
    marginTop: "20px",
  },
  marcador: {
    fontSize: "18px",
    marginTop: "10px",
  },
};

export default App;