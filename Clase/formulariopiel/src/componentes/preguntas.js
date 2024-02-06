import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardTitle, Col, Row } from 'reactstrap';

export default function Pregunta(props) {
    // Usar un estado para controlar el color de cada botón en cada tarjeta
    const [colores, setColores] = useState(() => {
        // Inicializar el estado con todos los botones desmarcados
        const initialColors = {};
        props.preguns.map((pregunta, index) => {
            initialColors[index] = pregunta.respuestas.map(() => props.color[0]);
        });
        return initialColors;
    });

    // Usar un estado para rastrear el último botón seleccionado en cada tarjeta
    const [lastClickedButton, setLastClickedButton] = useState({});

    const handleClick = (cardIndex, buttonIndex, valor) => {
        // Verificar si el botón seleccionado ya está marcado
        if (lastClickedButton[cardIndex] === buttonIndex) {
            return; // No hacer nada si el botón ya está marcado
        }

        // Crear una copia del objeto de colores
        const newColores = { ...colores };
        // Cambiar el color del botón presionado en la tarjeta específica
        // Desmarcar todos los botones en la tarjeta
        newColores[cardIndex] = newColores[cardIndex].map((color, index) => {
            return index === buttonIndex ? props.color[1] : props.color[0];
        });
        // Actualizar el estado de los colores
        setColores(newColores);
        // Guardar el índice del último botón seleccionado en esta tarjeta
        setLastClickedButton({ ...lastClickedButton, [cardIndex]: buttonIndex });
        // Sumar el valor del botón al contador
        props.contar(valor);
    };

    return (
        <Row>
            <Col sm="6">
                {props.preguns.map((pregunta, cardIndex) => (
                    <Card
                        key={cardIndex}
                        body
                        className="my-2"
                        style={{ width: '30rem' }}
                    >
                        <CardTitle tag="h5">{pregunta.texto}</CardTitle>
                        {pregunta.respuestas.map((respuesta, buttonIndex) => (
                            <Button
                                key={buttonIndex}
                                color={colores[cardIndex][buttonIndex]} // Usar el color correspondiente desde el estado
                                outline
                                onClick={() => handleClick(cardIndex, buttonIndex, respuesta.valor)}
                            >
                                {respuesta.respuesta}
                            </Button>
                        ))}
                    </Card>
                ))}
            </Col>
        </Row>
    );
}




<a href='fjkdfjdf'>pincha aqui</a>