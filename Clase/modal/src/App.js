import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Alert, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label
} from 'reactstrap';

const VentanaModalDiccionario = (props) => {
  const { className } = props;
  const [medicamento, setMedicamento] = useState("");

  const handleChange = (event) => {
    let medicamento1 = event.target.value;
    setMedicamento(medicamento1);
  };

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={2}>Filtrar:</Label>
            <Col sm={10}>
              <Input
                onChange={handleChange}
                id="filtro"
                name="filtro"
                type="Text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                onChange={handleChange}
                id="selectMulti"
                name="selectMulti"
                type="select"
              >
                <option>CODIGO1|DESCRIPCION1</option>
                <option>CODIGO2|DESCRIPCION2</option>
                <option>CODIGO3|DESCRIPCION3</option>
                <option>CODIGO4|DESCRIPCION4</option>
                <option>CODIGO5|DESCRIPCION5</option>
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          {medicamento}
          <Button color="primary" onClick={() => { props.medica(medicamento); props.toggle(); } }>
            {props.aceptar}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      medicamentoSeleccionar: "",  
      medicamentoEnmascarar: "", 
    }
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen })
  }

 

  cambiar1(medica) {

  
  this.setState({ medicamentoSeleccionar: medica });
  }
  
  vaciar1() {
    
      this.setState({ medicamentoSeleccionar: "" });
   
  }
  vaciar2() {

    this.setState({ medicamentoEnmascarar: "" });
}

  render() {
    return (
      <>
        <div>
          <UncontrolledAccordion
            defaultOpen={[
              '1'
            ]}
            stayOpen
          >
            <AccordionItem>
              <AccordionHeader targetId="1">
                GESTION DE FARMACOS
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <Row>
                  <Col>
                    <Alert color="info">
                      Incluir X Medicamentos:
                      <Input
                        type="textarea"
                        name="rxseleccionar"
                        value={this.state.medicamentoSeleccionar}
                      />
                      <Button
                        color="info"
                        onClick={() => { this.toggleModal(); }}
                      >
                        Add
                      </Button>{" "}
                      <Button color="info" onClick={() => this.vaciar1()}>Clear</Button>
                    </Alert>
                  </Col>
                  <Col>
                    <Alert color="danger">
                      Excluir X Medicamentos:
                      <Input
                        type="textarea"
                        name="rxenmascarar"
                        value={this.state.medicamentoEnmascarar}
                      />
                      <Button color="danger" onClick={() => { this.toggleModal(); }}>Add</Button>{" "}
                      <Button color="danger" onClick={() => this.vaciar2()}>Clear</Button>
                    </Alert>
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
        <VentanaModalDiccionario
          medica1={(medica) => this.cambiar1(medica)}
          medica2={(medica) => this.cambiar2(medica)}
          toggle={() => this.toggleModal()}
          mostrar={this.state.isOpen}
          aceptar={"Añadir"}
          titulo={"VENTANA MODAL"}
        />
        <br />
      </>
    );
  }
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}

export default App;
