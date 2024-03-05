import React, { Component } from 'react';
import { Button, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FlashCard} from  


/*const Sino = (props) => {
  return (<>
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {props.Titulo}
          </CardTitle>
          <div class='col-md-8 col-lg-3'>
            <CardImg src={props.imagen} />
          </div>
          <Button onClick={() => props.onClick(props.imagenSi)}>
            {props.textobotonSI}
          </Button>
          <Button onClick={() => props.onClick(props.imagenNo)}>
            {props.textobotonNO}
          </Button>
        </CardBody>
      </Card>
    </div>
  </>);
}*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: "/assets/imagen/dragonba.jpg"
    }
  }


  //f(param) { this.setState({ imagen: param }) }

  render() {
    return (
    /*  <div className="App">
        <Sino
          imagen={this.state.imagen}
          imagenSi="/assets/imagen/dragonba.jpg"
          imagenNo="/assets/imagen/malditarencarnacion.jpg"
          Titulo="Dragon Ball o Maldita rencarnacion"
          textobotonSI="Oh Dragon ball!"
          textobotonNO="Oh Maldita rencarnacion!"
          onClick={(x) => this.f(x)}
        />
      </div>*/
      <div>
        <FlashCard/>
      </div>
    );
  }
}

export default App;
