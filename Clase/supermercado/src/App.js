import React, { Component, useState } from 'react';
import { Button,ListGroup,ListGroupItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function Lista(props){

return(

    <>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </>
  );
}



function Selector(props) {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(false);

  const handleChange = (color) => {
    props.cambiar(color);
    setOpcionSeleccionada(true);
  }

  const contado = props.super.map((supermercado, i) => (
    <p key={i}>{supermercado.nombre}: {supermercado.contador}</p>
  ));

  const opciones = props.super.map((supermercado, i) => (
    <option key={i} value={supermercado.color}>
      {supermercado.nombre}
    </option>
  ));

  return (
    <>
      <select onChange={(e) => handleChange(e.target.value)} defaultValue={props.super[0].color}>
        {opciones}
      </select>
      {contado} {/* Mostrar el contador siempre */}
    </>
  );
}

function Botonera(props) {
  const [persona, setPersona] = useState('');
  const [posicion, setPosicion] = useState('');
  const [colores, setColores] = useState({});

  const handleClick = (valor, fila, columna) => {
    const newColores = { ...colores };
    const key = `${fila}-${columna}`;
    newColores[key] = props.color;
    setColores(newColores);
    setPersona(valor);
    setPosicion(`Fila ${fila + 1}, Columna ${columna + 1}`);

    // Obtener el color del botón que se está clicando
    const colorBoton = newColores[key];
    
    props.cambiarColor(colorBoton);
    props.supermercado(colorBoton, posicion);
  }

  const tablero = props.table.map((fila, i) => (
    <tr key={i}>
      {fila.map((valor, j) => {
        const key = `${i}-${j}`;
        return (
          <td key={j}>
            <Button color={colores[key]} outline={!props.color} disabled={!props.color} onClick={() => handleClick(valor, i, j)}>{valor}</Button>
          </td>
        );
      })}
    </tr>
  ));

  return (
    <>
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
        { 'nombre': 'Mercadona', 'color': 'success', 'contador': 0 },
        { 'nombre': 'Lidl', 'color': 'primary', 'contador': 0 },
        { 'nombre': 'Eroski', 'color': 'danger', 'contador': 0 },
        { 'nombre': 'BM', 'color': 'warning', 'contador': 0 }
      ],
      color: '',
      superpuestos:[{}],
    };
  }

  cambiarColor = (color) => {
    const supermercadoActualizado = this.state.supermercado.map(s => {
      if (s.color === color) {
        return { ...s, contador: s.contador + 1 };
      } else {
        return s;
      }
    });
    this.setState({ color: color, supermercado: supermercadoActualizado });
  }

  supermercado = (color) => {
    const m = this.state.supermercado.find(v => v.color === color);
    const t = this.state.supermercado;
    if (m && m.color === color) {
      t.forEach(v => {
        if (v.color === color) {
          v.contador++;
        }
      });
      this.setState({ supermercado: t });
    }
  }

  render() {
    return (
      <div className="App">
        <Selector super={this.state.supermercado} cambiar={this.cambiarColor} />
        <Botonera table={this.state.poblacion} color={this.state.color} super={this.state.supermercado} cambiarColor={(color) => this.cambiarColor(color)} supermercado={(color) => this.supermercado(color)} />
      </div>
    );
  }
}

export default App;