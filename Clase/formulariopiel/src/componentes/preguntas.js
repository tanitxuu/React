// preguntas.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardTitle, Col, Row, ButtonGroup } from 'reactstrap';

export default function Pregunta(props) {
    const [selectedButtons, setSelectedButtons] = useState({}); // Estado para almacenar los botones seleccionados por tarjeta

    const handleButtonClick = (i, orden, valor) => {
        setSelectedButtons(prevState => ({
            ...prevState,
            [orden]: i, // Almacenar el índice del botón seleccionado para esta tarjeta
        }));
        props.contar(valor, orden); // Llama a la función contar con el valor del botón seleccionado
    };

    // Función para obtener el índice del botón seleccionado para una tarjeta específica
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
                        <ButtonGroup vertical className="w-100"> {/* Indica que los botones estarán apilados verticalmente y ocuparán todo el ancho */}
                            {pregunta.respuestas.map((respuesta, i) => (
                                <div key={i} className="w-100"> {/* Envuelve cada botón en un div y hace que ocupe todo el ancho */}
                                    <Button
                                        color={props.color[0]}
                                        outline
                                        onClick={() => handleButtonClick(i, pregunta.orden, respuesta.valor)}
                                        active={i === getSelectedButtonIndex(pregunta.orden)} // Comprueba si este botón está seleccionado para esta tarjeta
                                        className="w-100" // Añade la clase w-100 para que el botón ocupe todo el ancho disponible
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



