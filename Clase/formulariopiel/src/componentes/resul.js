import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardText, Col, Row, CardImg } from 'reactstrap';

export default function Resultado(props) {
    
    const sumaContador = props.contador();

    const resultado = props.result.find(v => v.min < sumaContador && v.max > sumaContador);

    return (
        <Row>
            <Col sm="6">
                {
                    <Card className="my-2" style={{ width: '30rem' }}>
                        <CardBody>
                            <CardTitle tag="h5">Resultado</CardTitle>
                            <div>
                                <CardText>Puntuacion obtenida: {sumaContador} Rango : {resultado.min}-{resultado.max}</CardText>
                                <CardText>Tipo de piel: {resultado.tipo}</CardText>
                                <CardImg src={resultado.imagen}></CardImg>
                                <CardText>Descripción: {resultado.descripcion}</CardText>
                            </div>
                        </CardBody>
                    </Card>
                }
            </Col>
        </Row>
    );
}

