// App.js
import React, { Component } from 'react';
import { PREGUNTAS } from './componentes/pregunta';
import Pregunta from './componentes/preguntas';
import './App.css';
import { Button } from 'reactstrap';
import { RESULTADO } from './componentes/respuesta';
import Resultado from './componentes/resul';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preguntas: PREGUNTAS,
      logg: true,
      resul: RESULTADO,
      contador: 0,
      color: ['info', 'success'],
      desactivar: [], // Estado para almacenar las preguntas desactivadas
    }
  }

  contar = (valor, orden) => {
    if (!this.state.desactivar.includes(orden)) {
      this.setState(prevState => ({
        contador: prevState.contador + valor,
        desactivar: [...prevState.desactivar, orden], // Agrega el orden a la lista de desactivar si no está incluido
      }));
      console.log(this.state.contador)
    }
  }

  resultado = () => {
    this.setState(prevState => ({
      logg: !prevState.logg,
    }));
  }

  render() {
    let obj = (
      <>
        <h1>Averigua tu fototipo</h1>
        <Pregunta preguns={this.state.preguntas} contar={this.contar} color={this.state.color} resultado={this.resultado} disabless={this.state.desactivar} />
        <Button onClick={this.resultado} color={this.state.color[1]} style={{ width: '30rem', margin: '15px' }}>Resultado</Button>
      </>
    );
    if (!this.state.logg) {
      obj = <Resultado result={this.state.resul} contador={this.state.contador} />;
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;

