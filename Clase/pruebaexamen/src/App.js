import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const Tablero = (props) => {
  const tablero = new Array(9).fill(null).map(() => new Array(9).fill(null));

  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      tablero[i][j] = "X";
    }
  }

  return (
    <div className="tableroJuego">
      <h2>Turno de: {props.turno ? 'Azules' : 'Rojos'}</h2>
      {tablero.map((fila, i) => (
        <div key={i} className="fila">
          {fila.map((columna, j) => (
            <span key={`${i}-${j}`} className="columna">
              <Button outline color={props.color} onClick={props.cambiarTurno}></Button>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaColores: ["primary", "danger"],
      turno: false,
      color: "white",
    }
  }

  cambiarTurno() {
    let aux = !this.state.turno;
    this.setState({ turno: aux });
    this.cambiarFicha(); // Llama a cambiarFicha después de cambiar el turno
  }

  cambiarFicha() {
    const { turno, listaColores } = this.state;
    const color = listaColores.slice(); // Copia el array de colores

    if (turno === false) {
      this.setState({ color: color[0] });
    } else {
      this.setState({ color: color[1] });
    }
  }

  render() {
    return (
      <div className="App">
        <Tablero
          turno={this.state.turno}
          color={this.state.color}
          cambiarTurno={() => this.cambiarTurno()}
        />
      </div>
    );
  }
}

export default App;







