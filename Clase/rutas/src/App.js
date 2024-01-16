
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState} from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';

function App(){
  const lista = ['Estepona', 'Escañela', 'Vitoria', 'Madrid', 'Zaragoza', 'Jaen'];
  const [ciudad, setCiudad] = useState([]);

  const handleChange = (event) => {
    const buscar= event.target.value.toLowerCase()
    let bciudad = lista.filter(v => v.toLowerCase().startsWith(buscar));
    setCiudad(bciudad);
    
  }

    return (
      <div className="App">
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
                onChange={handleChange} 
              />
            </FormGroup>
            <CardText className="text-danger">
              <ul>
                {ciudad.map((v,i)=><li key={i}>{v}</li>)}
              </ul>
            </CardText>
          </Form>
        </Card>
      </Col>
    </Row>

      </div>
    );
  }


export default App;
