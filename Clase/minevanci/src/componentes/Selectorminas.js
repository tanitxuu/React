import React from 'react';
import { Button } from 'reactstrap';

const Selectorminas = (props) => {
  return (
    <div>
      <label>Numero de Minas</label>
      &nbsp;
       <Button onClick={props.pulsar1}>
        +
      </Button>
      &nbsp;&nbsp;
      <Button onClick={props.pulsar2}>
         -
      </Button>
      &nbsp;&nbsp;
      <label>{props.contador}</label>
    </div>
  );
}

export default Selectorminas;