import React, { Component, useState } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col }
    from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
const VentanaModalDiccionario = (props) => {
    const { className } = props;
    const [Nombre, setNombre] = useState("")
    const [Telefono, setTelefono] = useState("")


    const añadir = (event) => {
        if (event.target.name === "nombre" && event.target.value !== "") {
            setNombre(event.target.value)
        } else if (event.target.name === "telefono" && event.target.value !== "") {
            setTelefono(event.target.value)
        }
    }
    console.log(Nombre)
    return (
        <div>
            <Modal isOpen={props.mostrar} toggle={props.toggle} className={className}
                onEntering={() => { }}>
                <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
                <ModalBody>
                    <FormGroup row>
                        <Label sm={2} > Nombre: </Label>
                        <Col sm={10}>
                            <Input
                                id="nombre"
                                name="nombre"
                                type="Text"
                                onChange={añadir}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} > Teléfono: </Label>
                        <Col sm={10}>
                            <Input
                                id="telefono"
                                name="telefono"
                                type="Text"
                                onChange={añadir}
                            />
                        </Col>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={() => props.añadirL(Nombre, Telefono)}>{props.aceptar}</Button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ModalFooter>
            </Modal>
        </div>
    );
}
const Mostrar = (props) => {

    return (

        <ul>
           {props.lista.map(v => (<li key={v}>{v}<Button onClick={() => props.borrar(v)}>Borrar</Button></li>))}

        </ul>
    );
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUsuarios: [],
            isOpen: false,
        };
    }
   
    añadirLista(nombreL, telefonoL) {
        if (nombreL !== "" && telefonoL !== "") {
          this.setState((prevState) => ({
            listaUsuarios: [...prevState.listaUsuarios, `${nombreL} - ${telefonoL}`],
          }));
          this.toggleModal();
        } else {
          return;
        }
      }
      borrar(item) {
        this.setState(prevState => ({
            listaUsuarios: prevState.listaUsuarios.filter(v => v !== item)
        }));
    }
    
    setIsOpen(d) {
        if (d === undefined) return;
        this.setState({ isOpen: d })
    }
    toggleModal() { this.setIsOpen(!this.state.isOpen); }
    render() {
        return (
            <div className="App">
                <h1>Listin teléfonico</h1>
                <Mostrar lista={this.state.listaUsuarios} borrar={(lista) => this.borrar(lista)} />
                <Button onClick={() => { this.toggleModal() }} color="info">Add</Button>
                <VentanaModalDiccionario
                    añadirL={(nombreL, telefonoL) => this.añadirLista(nombreL, telefonoL)}
                    mostrar={this.state.isOpen}
                    aceptar={"Añadir"}
                    toggle={() => this.toggleModal()}
                    titulo={"Alta en el listín"}
                />
            </div>
        );
    }
}
export default App;