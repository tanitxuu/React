import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';

export default function Resultado(props) {
    // Obtener el resultado según el contador
    const resultado = props.obtenerResultado(props.contador);

    return (
        <Row>
    <Col sm="6">
        {
            props.result.find(v => v.min < props.contador && v.max > props.contador) && (
                <Card className="my-2" style={{ width: '30rem' }}>
                    <CardBody>
                        <CardTitle tag="h5">Resultado</CardTitle>
                        <div>
                            <CardText>Tipo de piel: {props.result.find(v => v.min < props.contador && v.max > props.contador).tipo}</CardText>
                            <CardText>Descripción: {props.result.find(v => v.min < props.contador && v.max > props.contador).descripcion}</CardText>
                        </div>
                    </CardBody>
                </Card>
            )
        }
    </Col>
</Row>

    );
}

