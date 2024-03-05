import React from 'react';
import { Button, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const FlashCard = (props) => {
    return (<>
      <div class="row">
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              {props.Titulo}
            </CardTitle>
            <div class='col-md-8 col-lg-3'>
              <CardImg src={props.imagen} />
            </div>
            <Button onClick={() => props.onClick(props.imagenSi)}>
              {props.textobotonSI}
            </Button>
            <Button onClick={() => props.onClick(props.imagenNo)}>
              {props.textobotonNO}
            </Button>
          </CardBody>
        </Card>
      </div>
    </>);
  }