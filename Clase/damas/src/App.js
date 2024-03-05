import React, { Component} from 'react';
import { Button, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Botonera(props){

 
    const tablero = [];
  
    for (let i = 0; i < props.table.length; i++) {
      const t = [];
  
      for (let j = 0; j < props.table[i].length; j++) {
        const filapar = i % 2 === 0;
        const columnapar = j % 2 === 0;
  
        if ((columnapar && !filapar) || (!columnapar && filapar)) {
          if(i>=5)
          t.push(<Button key={{i,j}} onClick={()=>props.moverpeon(props.verde)} color={props.verde} />);
          else{
            t.push(<Button key={{i,j}} onClick={()=>props.moverpeon(props.gris)} color={props.gris} />);
          }
        } else {
          t.push(<Button outline />);
        }
      }
  
      tablero.push(<Row key={i}><Col key={j}>{t}</Col></Row>);
    }
  
  return <>{tablero}</>;
  
}
class App extends Component {
constructor(props) {
super(props);
this.state = {
tablero:[],
color1:"secondary",
color2:"success",
posicionX:0,
posicionY:0,
};
}
moverpeon(x,y,color){
  if (color === this.state.color1 || color === this.state.color2) {
    this.setState({ color1: this.state.color2, color2: this.state.color1 });
  }
}

componentWillMount() {
let t=[];
for (let i = 0; i < 8; i++) {
  let fila=[];
  for (let j = 0; j < 4; j++) {
    fila.push("");
  }
  t.push(fila);
}
this.setState({tablero:t});
}

render() {
return (
<div className="App">
<header className="App-header">
  <Botonera
  table={this.state.tablero}
  gris={this.state.color1}
  verde={this.state.color2}
  moverpeon={(color) => this.moverpeon(color)}
  localizadorX={this.state.posicionX}
  localizadorY={this.state.posicionY}
  />
</header>
</div>
);
}
}
export default App;
