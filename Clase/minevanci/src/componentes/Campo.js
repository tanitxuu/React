import React from 'react';
import { Button } from 'reactstrap';

const MatrizComponent = (props) => {
  // Crear una matriz de 10x10
  const matriz = Array.from({ length: 10 }, () => Array(10).fill(null));

  // Llenar la matriz con valores utilizando un bucle for
  let contador = 1;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      matriz[i][j] = <Button>O</Button>;
    }
  }

  
  const obtenerColorFondo = (fila, columna) => {
    return fila === props.localizadorX && columna === props.localizadorY ? 'red' : 'white';
  };

  return (
    <div className="tableroJuego">
      <h2>TABLERO DE JUEGO</h2>
      <p>POSICION DEL JUGADOR: [{props.localizadorX}], [{props.localizadorY}]</p>
      <table>
        {matriz.map((fila, filaIndex) => (
          <tr key={filaIndex}>
            {fila.map((col, columnaInd) => (
              <td key={columnaInd}>
                <Button style={{ backgroundColor: obtenerColorFondo(filaIndex, columnaInd) }}>
                  J
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MatrizComponent;
