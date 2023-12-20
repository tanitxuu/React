import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const MapaBotones = (props) => {

  let lista = []
  for (let i = 0; i < props.tablero.length; i++) {
    let lista2 = []
    for (let j = 0; j < props.tablero[i].length; j++) {
      lista2.push(<Button outline color={props.color} onClick={(i, j) => props.click(i, j)} />)

    }
    lista.push(<Row><Col>{lista2}</Col></Row>)
  }

  return (<>{lista}</>)
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablero: [],
      listaColores: ["primary", "danger"],
      turno: true,
      partida: true,
      color: "secondary",
    }
  }
  click(x, y) {
    if (!this.state.partida) return
    if (!x == 0) return
    else {
      if (this.state.turno) {
        let lista = this.state.listaColores
        this.setState({ color: lista[0], turno: !this.state.turno })
      } else {
        let lista = this.state.listaColores
        this.setState({ color: lista[1], turno: !this.state.turno })
      }

    }

  }

  ganador(x, y) {
    //ir comprobando
  }
  componentWillMount() {
    let t = []
    for (let i = 0; i < 9; i++) {
      let fila = []
      for (let j = 0; j < 9; j++) {
        fila.push("secondary")
      }
      t.push(fila)
    }
    this.setState({ tablero: t })
  }

  render() {
    return (
      <div className="App">
        <h2>Turno: {this.state.turno ? "Azul" : "Rojo"}</h2>
        <MapaBotones
          color={this.state.color}
          tablero={this.state.tablero}
          click={(x, y) => this.click(x, y)}

        />
      </div>
    );
  }
}
export default App;









