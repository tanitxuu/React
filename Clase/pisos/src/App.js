// App.js
import React, { Component } from 'react';
import { PISOS } from './matrices/pisos';
import { PISOSX } from './matrices/pisosX';
import { PRECIOS } from './matrices/precios';
import Pregunta from './componentes/preguntas';
import PrecioFinal from './componentes/precio';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pisos:PISOS,
      x:PISOSX,
      precio:PRECIOS,
      preguntas:[],
      precio:'',
      ver:true,
      
    }
  }
pisos(respuestas){
  this.setState({preguntas:respuestas})
}
  
  render() {
   let obj=''
   if(!this.state.ver){
    obj=<PrecioFinal/>
   }
    return (
      <div className="App">
      <Pregunta preguntas={()=>this.precio()}/>
     {obj}
      </div>
    );
  }
}

export default App;
