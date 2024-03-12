import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardTitle, Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default function Pregunta(props) {

    const [respuestas, setRespuestas] = useState([])
    const [metros, setMetros] = useState('')
    const [habitaciones, setHabitaciones] = useState('')
    const [baños, setBaños] = useState('')
    const [vistas, setVistas] = useState('')
    const [garaje, setGaraje] = useState('')
    const [trastero, setTrastero] = useState('')
    const [año, setAño] = useState('')
    const [estado, setEstado] = useState('')
    const [piscina, setPiscina] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'metros') {
            setMetros(value);
        } else if (name === 'habitaciones') {
            setHabitaciones(value);
        } else if (name === 'baños') {
            setBaños(value);
        } else if (name === 'vistas') {
            setVistas(value);
        } else if (name === 'garaje') {
            setGaraje(value);
        } else if (name === 'trastero') {
            setTrastero(value);
        } else if (name === 'año') {
            setAño(value);
        } else if (name === 'estado') {
            setEstado(value);
        } else if (name === 'piscina') {
            setPiscina(value);
        }
    };


    const handle = (e) => {
        e.preventDefault();
        let p = [metros, habitaciones, baños, vistas, garaje, trastero, año, estado, piscina]
        setRespuestas(p)
        console.log(p)
        props.preguntas(respuestas);
    }

    return (
        <Row>
            <Col sm="6">
                <Card
                    body
                    className="my-2"
                    style={{ width: '30rem' }}
                >
                    <CardTitle tag="h5">Formulario</CardTitle>
                    <Form onSubmit={handle}>
                        <FormGroup>
                            <Label for="metros">
                                Cuantos metros cuadrados tiene el piso?
                            </Label>
                            <Input
                                id="metros"
                                name="metros"
                                placeholder="m²"
                                type="text"
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="habitaciones">
                                Numero de habitaciones:
                            </Label>

                            <Input
                                id="habitaciones"
                                name="habitaciones"
                                type="number"
                                placeholder='0'
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="baños">
                                Numero de baños
                            </Label>
                            <Input
                                id="baños"
                                name="baños"
                                type="number"
                                placeholder='0'
                                onChange={handleChange}
                                required
                            />

                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>Vistas al mar</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input name="vistas" type="radio" value="1" onChange={handleChange} />{' '}
                                    Sí
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input name="vistas" type="radio" value="0" onChange={handleChange} />{' '}
                                    No
                                </Label>
                            </FormGroup>
                        </FormGroup>


                        <FormGroup tag="fieldset">

                            <legend>Garaje</legend>

                            <FormGroup check>
                                <Input name="garaje" type="radio" id='garaje' onChange={handleChange} value={1} />
                                {' '}
                                <Label check>Si</Label>
                            </FormGroup>

                            <FormGroup check>
                                <Input name="garaje" type="radio" id='garaje' onChange={handleChange} value={0} />
                                {' '}
                                <Label check>No</Label>
                            </FormGroup>

                        </FormGroup>


                        <FormGroup tag="fieldset">

                            <legend>Trastero</legend>

                            <FormGroup check>
                                <Input name="trastero" type="radio" id='trastero' onChange={handleChange} value={1} />
                                {' '}
                                <Label check>Si</Label>
                            </FormGroup>

                            <FormGroup check>
                                <Input name="trastero" type="radio" id='trastero' onChange={handleChange} value={0} />
                                {' '}
                                <Label check>No</Label>
                            </FormGroup>

                        </FormGroup>
                        <FormGroup>
                            <Label for="año">
                                En que año se construyo:
                            </Label>
                            <Input
                                id="año"
                                name="año"
                                placeholder="2000"
                                type="number"
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="estado">
                                Estado de la vivienda
                            </Label>
                            <Input
                                id="estado"
                                name="estado"
                                type="select"
                                onChange={handleChange}
                                value={estado} // Asegúrate de incluir el valor seleccionado en el estado
                                required
                            >
                                <option value="">Selecciona un estado</option> // Añade una opción por defecto
                                <option value="1">Desastroso</option>
                                <option value="2">Aceptable</option>
                                <option value="3">Buen estado</option>
                                <option value="4">Casi nuevos</option>
                                <option value="5">Nuevo</option>
                            </Input>
                        </FormGroup>
                        <FormGroup tag="fieldset">

                            <legend>Piscina</legend>

                            <FormGroup check>
                                <Input name="piscina" type="radio" id='piscina' onChange={handleChange} value={1} />
                                {' '}
                                <Label check>Si</Label>
                            </FormGroup>

                            <FormGroup check>
                                <Input name="piscina" type="radio" id='piscina' onChange={handleChange} value={0} />
                                {' '}
                                <Label check>No</Label>
                            </FormGroup>

                        </FormGroup>

                        <Button>
                            Enviar
                        </Button>
                    </Form>

                </Card>

            </Col>
        </Row>
    );
}



