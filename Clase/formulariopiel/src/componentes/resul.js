import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';

export default function Resultado(props) {
    
    const resultado = props.result.find(v => v.min < props.contador && v.max > props.contador);



    return (
        <Row>
            <Col sm="6">
                {
                    props.result.find(v => v.min < props.contador && v.max > props.contador) && (
                        <Card className="my-2" style={{ width: '30rem' }}>
                            <CardBody>
                                <CardTitle tag="h5">Resultado</CardTitle>
                                <div>
                                    <CardText>Tipo de piel: {resultado.tipo}</CardText>
                                    <CardText>Descripción: {resultado.descripcion}</CardText>
                                </div>
                            </CardBody>
                        </Card>
                    )
                }
            </Col>
        </Row>

    );
}

