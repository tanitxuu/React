import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Altas = (props) => {
  return (
    <Form onSubmit={(e) => props.cambiar(e)}>
      <FormGroup>
        <Label for="Nombre">Nombre:</Label>
        <Input name="nombre" id="nombre" placeholder="introduzca nombre" />
        <Label for="Nombre">Apellidos:</Label>
        <Input name="apellidos" id="apellidos" placeholder="introduzca apellidos" />
        <Label for="Nombre">Telefono:</Label>
        <Input name="telefono" id="telefono" placeholder="introduzca telefono" />
      </FormGroup>
      <Button>Añadir</Button>
    </Form>
  );
}

const Mostrar = (props) => {
  return (
    <ul>
      {props.lista.map((v, i) => (
        <li key={i}>
          {v.nombre + " " + v.apellidos + " " + v.telefono}
          <Button onClick={() => props.borrar(v)}>X</Button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [lista, setLista] = useState([{ nombre:'', apellidos: '', telefono: '' }]);

  const cambiar = (event) => {
    event.preventDefault();
    let nombre = event.target.nombre.value;
    let apellidos = event.target.apellidos.value;
    let telefono = event.target.telefono.value;
    
    const telefonoExistente = lista.find(v=> v.telefono === telefono);
    if (!telefonoExistente) {
      //si no pongo delante la lista no me mete nuevos usuarios
      setLista([...lista,{ nombre, apellidos, telefono }]);
    }
  }
  

  const eliminar = (v) => {
    const nuevaLista = lista.filter(t => t !== v);
    setLista(nuevaLista);
  }

  return (
    <div className="App">
      <Mostrar lista={lista} borrar={(v) => eliminar(v)} />
      <Altas cambiar={(e) => cambiar(e)} />
    </div>
  );
}

export default App;
