import React from 'react';
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
      <h2>Turno de : {props.jugador ? 'Azules' : 'Rojos'}</h2>
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

export default Tablero;

