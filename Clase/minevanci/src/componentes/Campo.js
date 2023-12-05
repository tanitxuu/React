import React from 'react';
import { Button } from 'reactstrap';

const MatrizComponent = (props) => {
  // Crear una matriz de 10x10 con los parametros de antes
  let filas= props.fila;
  let columnas=props.columna;
  const matriz = Array.from({ length: filas }, () => Array(columnas).fill(null));

  // Llenar la matriz con valores utilizando un bucle for
 
  

  
  const obtenerColorFondo = (fila, columna) => {
    return fila === props.localizadorX && columna === props.localizadorY ? 'red' : 'grey';
  };

  return (
    <div className="tableroJuego">
      <h2>TABLERO DE JUEGO</h2>
      <p>POSICION DEL JUGADOR: [{props.localizadorX}], [{props.localizadorY}]</p>
      <table>
        {matriz.map((fila, filaIndex) => (
          <tr key={filaIndex}>
            {fila.map((columna, columnaInd) => (
              <td key={columnaInd}>
                <Button style={{ backgroundColor: obtenerColorFondo(filaIndex, columnaInd) }}>
                  h
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
