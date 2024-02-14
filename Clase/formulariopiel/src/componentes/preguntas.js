// preguntas.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardTitle, Col, Row, ButtonGroup } from 'reactstrap';

export default function Pregunta(props) {
    const [selectedButtons, setSelectedButtons] = useState({}); // Estado para almacenar los botones seleccionados por tarjeta

    const handleButtonClick = (i, orden, valor) => {
        setSelectedButtons(prevState => ({
            ...prevState,
            [orden]: i, 
        }));
        props.contar(valor, orden); 
    }

    const getSelectedButtonIndex = (orden) => {
        return selectedButtons[orden];
    };

    return (
        <Row>
            <Col sm="6">
                {props.preguns.map(pregunta => (
                    <Card
                        key={pregunta.orden}
                        body
                        className="my-2"
                        style={{ width: '30rem' }}
                    >
                        <CardTitle tag="h5">{pregunta.texto}</CardTitle>
                        <ButtonGroup vertical className="w-100"> 
                            {pregunta.respuestas.map((respuesta, i) => (
                                <div key={i} className="w-100"> 
                                    <Button
                                        color={props.color[0]}
                                        outline
                                        onClick={() => handleButtonClick(i, pregunta.orden, respuesta.valor)}
                                        active={i === getSelectedButtonIndex(pregunta.orden)} 
                                        className="w-100" 
                                    >
                                        {respuesta.respuesta}
                                    </Button>
                                </div>
                            ))}
                        </ButtonGroup>
                    </Card>
                ))}
            </Col>
        </Row>
    );
}



