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
    }
  }

  contar = (v) => {
   
    let valor = this.state.contador + v;
    this.setState({ contador: valor });

    if (this.state.color === this.state.color[0])
      this.setState({ color: this.state.color[1] });
    console.log(this.state.contador);
  }

  resultado = () => {
    this.setState({ logg: !this.state.logg });
  }

  render() {
    let obj = <><h1>Averigua tu fototipo</h1>
      <Pregunta preguns={this.state.preguntas} contar={this.contar} color={this.state.color} />
      <Button onClick={this.resultado} color={this.state.color[1]} style={{ width: '30rem', margin: '15px' }}>Resultado</Button></>;
    if (!this.state.logg) {
      obj = <Resultado result={this.state.resul} contador={this.state.contador} obtenerResultado={(contador)=>this.obtenerResultado(contador)} />;
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;
