
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Row, Col, Card, CardText, Form, FormGroup,Label, Input } from 'reactstrap';
function Menu(props) {
  return (
    <div>
      <Row>
        <Col sm="4"></Col>
        <Col sm="4">
          <Card body>
            <Form inline>
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="me-sm-2" for="exampleEmail">Buscar Ciudad</Label>
                <Input
                  placeholder="Ciudad"
                  type="text"
                  onChange={props.buscarciudad}
                />
              </FormGroup>
              <Label>Resultados de Busqueda:</Label>
              <CardText className="text-danger">
                <ul>
                  {props.ciudad.map((v, i) => <li key={i}>{v}</li>)}
                </ul>
              </CardText>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
function App() {
  const lista = ['Estépona', 'Escañela', 'Vitoria', 'Madrid', 'Zaragoza', 'Jaen', 'Leon'];
  const [ciudad, setCiudad] = useState([]);

  const handleChange = (event) => {
    const buscar = event.target.value.toLowerCase()
    let bciudad = lista.filter(v => v.toLowerCase().startsWith(buscar));
    setCiudad(bciudad);

  }

  return (
    <div className="App">
      <Menu
        buscarciudad={handleChange}
        ciudad={ciudad}
      />
    </div>
  );
}


export default App;
