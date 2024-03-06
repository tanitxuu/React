// App.js
import React, { Component } from 'react';
import { PISOS } from './matrices/pisos';
import { PISOSX } from './matrices/pisosX';
import { PRECIOS } from './matrices/precios';
import { Button } from 'reactstrap';
import Pregunta from './componentes/preguntas';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pisos:PISOS,
      x:PISOSX,
      precio:PRECIOS,
      preguntas:[],
      
    }
  }

  
  render() {
   
    return (
      <div className="App">
     <Pregunta preguntas={this.state.preguntas}/>
      </div>
    );
  }
}

export default App;
