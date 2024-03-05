import React, { Component, useState } from 'react';
import { Button,ListGroup,ListGroupItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function Lista(props) {
  return (
    <>
      <h4>Lista de Supermercados</h4>
      <ListGroup>
        {props.superpuestos.map((supermercado, index) => (
          <ListGroupItem key={index}>
            Nombre: {supermercado.nombre}, Posición: {supermercado.posicion}, Clientes: {supermercado.personas}
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

function Selector(props) {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(false);

  const handleChange = (e) => {
    const color = e.target.value;
    props.cambiar(color);
    setOpcionSeleccionada(true);
  };

  const contado = props.super.map((supermercado, i) => (
    <p key={i}>
      {supermercado.nombre}: {supermercado.contador}
    </p>
  ));

  const opciones = props.super.map((supermercado, i) => (
    <option key={i} value={supermercado.color}>
      {supermercado.nombre}
    </option>
  ));

  return (
    <>
      <select onChange={handleChange} defaultValue={props.super[0].color}>
        {opciones}
      </select>
      {contado} {/* Mostrar el contador siempre */}
    </>
  );
}

function Botonera(props) {
  const [colores, setColores] = useState({});
  const [botonesPulsados, setBotonesPulsados] = useState([]);
  const [persona, setPersona] = useState('');
  const [posicion, setPosicion] = useState('');

  const handleClick = (valor, fila, columna) => {
    const key = `${fila}-${columna}`;
    // Verificar si el botón ya está pulsado
    if (colores[key]) {
      return; // Si ya está pulsado, salir de la función sin hacer nada
    }

    const newColores = { ...colores };
    newColores[key] = props.color;
    setColores(newColores);

    // Registrar el botón pulsado
    setBotonesPulsados([...botonesPulsados, key]);

    // Obtener el color del botón que se está clicando
    const colorBoton = newColores[key];

    // Actualizar la persona seleccionada y la posición
    setPersona(valor);
    setPosicion(`Fila ${fila + 1}, Columna ${columna + 1}`);

    // Calcular el número de personas alrededor del supermercado
    let totalPersonas = parseInt(valor);
    const filaInicio = Math.max(0, fila - 1);
    const filaFin = Math.min(props.table.length - 1, fila + 1);
    const columnaInicio = Math.max(0, columna - 1);
    const columnaFin = Math.min(props.table[0].length - 1, columna + 1);
    for (let i = filaInicio; i <= filaFin; i++) {
      for (let j = columnaInicio; j <= columnaFin; j++) {
        if (i !== fila || j !== columna) {
          totalPersonas += parseInt(props.table[i][j]);
        }
      }
    }

    // Llamar a la función para actualizar el supermercado
    props.supermercado(colorBoton, `Fila ${fila + 1}, Columna ${columna + 1}`, totalPersonas);
  };

  const tablero = props.table.map((fila, i) => (
    <tr key={i}>
      {fila.map((valor, j) => {
        const key = `${i}-${j}`;
        return (
          <td key={j}>
            <Button
              color={colores[key]}
              outline={!props.color}
              disabled={!props.color || botonesPulsados.includes(key)}
              onClick={() => handleClick(valor, i, j)}
            >
              {valor}
            </Button>
          </td>
        );
      })}
    </tr>
  ));

  return (
    <>
      <Selector super={props.super} cambiar={props.cambiar} />
      <table>
        <tbody>{tablero}</tbody>
      </table>
      <p>Posición seleccionada: {posicion}</p>
      <p>Persona seleccionada: {persona}</p>
    </>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poblacion: [
        [0, 5, 4, 2, 9, 8, 0, 8, 8],
        [1, 7, 21, 23, 44, 5, 3, 4, 0],
        [2, 6, 32, 22, 33, 8, 4, 2, 8],
        [1, 2, 43, 4, 56, 65, 34, 11, 8],
        [2, 22, 32, 3, 42, 62, 43, 21, 0],
        [2, 2, 23, 34, 64, 24, 42, 15, 7],
        [0, 2, 36, 43, 61, 26, 64, 12, 0],
        [1, 2, 15, 43, 34, 2, 12, 2, 3],
        [1, 0, 12, 3, 0, 0, 21, 2, 2]
      ],
      supermercado: [
        { nombre: 'Mercadona', color: 'success', contador: 0 },
        { nombre: 'Lidl', color: 'primary', contador: 0 },
        { nombre: 'Eroski', color: 'danger', contador: 0 },
        { nombre: 'BM', color: 'warning', contador: 0 }
      ],
      color: '',
      superpuestos: [],
    };
  }

  cambiar = (color) => {
    this.setState({ color: color });
  };

  cambiarColor = (color, isFromSelect) => {
    const supermercadoActualizado = this.state.supermercado.map((s) => {
      if (s.color === color && !isFromSelect) {
        return { ...s, contador: s.contador + 1 };
      } else {
        return s;
      }
    });
    this.setState({ supermercado: supermercadoActualizado });
  };

  supermercado = (color, posicion, personas) => {
    const nombreSupermercado = this.state.supermercado.find(s => s.color === color).nombre;
    const nuevoSuperpuesto = {
      nombre: nombreSupermercado,
      posicion: posicion,
      personas: personas,
    };
    this.setState((prevState)=> ({
      superpuestos: [...prevState.superpuestos, nuevoSuperpuesto],
    }));
  };

  render() {
    return (
      <div className="App">
        <Botonera
          table={this.state.poblacion}
          color={this.state.color}
          super={this.state.supermercado}
          cambiarColor={this.cambiarColor}
          supermercado={this.supermercado}
          cambiar={this.cambiar}
        />
        <Lista superpuestos={this.state.superpuestos} />
      </div>
    );
  }
}

export default App;