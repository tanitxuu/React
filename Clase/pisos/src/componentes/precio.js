import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, Col, Row,CardText } from 'reactstrap';
export default function PrecioFinal(props) {

    return (
        <Row>
            <Col sm="6">
                <Card
                    body
                    className="my-2"
                    style={{ width: '30rem' }}
                >
                    <CardTitle tag="h5">Precio Estimado</CardTitle>
                    <CardText>El precio estimado para tu piso seria : {props.precio}</CardText>

                </Card>

            </Col>
        </Row>
    );
}

