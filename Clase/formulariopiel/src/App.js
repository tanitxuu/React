// App.js
import React, { Component } from 'react';
import { PREGUNTAS } from './componentes/pregunta';
import Pregunta from './componentes/preguntas';
import './App.css';
import { Button } from 'reactstrap';
import { RESULTADO } from './componentes/respuesta';
import Resultado from './componentes/resul';
import { PIEL } from './php/datos';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preguntas: PREGUNTAS,
      logg: true,
      resul: RESULTADO,
      contador: [],
      color: ['info', 'success'],
      desactivar:[],
      
    }
  }

  contar = (valor, orden) => {
    if (!this.state.desactivar.find(v=>v.orden===orden)) {
      let obj={"orden":orden,"valor":valor}
      this.state.contador.push(obj)
      this.state.desactivar.push(obj)
      let aa=this.state.contador.map(v=>v)
      console.log(aa)
    }
  }

  resultado = () => {
    this.setState(prevState => ({
      logg: !prevState.logg,
    }));
  }
  respuesta() {
    const numeroPreguntasRespondidas = this.state.contador.length;
    if (numeroPreguntasRespondidas === 7) {
        return this.state.contador.reduce((total, obj) => total + obj.valor, 0);
    
  }}
  userLogin(fototipo){
    
    axios.post(PIEL,JSON.stringify({
      fichero:fototipo,
    }))
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
      obj = <Resultado result={this.state.resul} contador={(fototipo)=>this.respuesta(fototipo)} img={this.state.img} login={(fototipo)=>this.userLogin(fototipo)}/>;
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;

