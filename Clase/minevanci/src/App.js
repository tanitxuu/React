import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Component } from 'react';
import Selectorminas from './componentes/Selectorminas';
import Botonera from './componentes/Botonera';
import Tablero from './componentes/Campo';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      minas:10,
      filas:10,
      columnas:10,
      posicionX:0,
      posicionY:0,
    }
  }
  aumentar(){
    let aumeto = this.state.minas+1;
    this.setState({minas:aumeto});
  }
  quitar(){
    if(this.state.minas===10){
      let minas =this.state.minas;
      this.setState({minas:minas});
  }else{
    let quitar = this.state.minas-1;
    this.setState({minas:quitar});
    }  
  }
  arriba(){
    if(this.state.posicionX>0){
    let n = this.state.posicionX-1;
    this.setState({posicionX:n});
    }
  }
  abajo(){
    if(this.state.posicionX<9){
      let n = this.state.posicionX+1;
      this.setState({posicionX:n});
      }
  }
  derecha(){
    if(this.state.posicionY<9){
      let n = this.state.posicionY+1;
      this.setState({posicionY:n});
      }
  }
  izquierda(){
    if(this.state.posicionY>0){
      let n = this.state.posicionY-1;
      this.setState({posicionY:n});
      }
  }
  generarmina(){
    
  }
  render(){
  return (
    <div className="App">
     <Selectorminas
      pulsar1={()=>this.aumentar()}
      pulsar2={()=>this.quitar()}
      contador={this.state.minas}
    />
    <Botonera
      arriba={()=>this.arriba()}
      abajo={()=>this.abajo()}
      derecha={()=>this.derecha()}
      izquierda={()=>this.izquierda()}
      posicion1={this.state.posicionX}
      posicion2={this.state.posicionY}
    />
    <Tablero
    localizadorX={this.state.posicionX}
    localizadorY={this.state.posicionY}
    minas={this.state.minas}
    fila={this.state.filas}
    columna={this.state.columnas}
    />
    </div>
  );
}
}

export default App;
