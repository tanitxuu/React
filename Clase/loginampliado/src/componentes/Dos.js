import React, { useState } from 'react';
import {
    Button,Input
 } from 'reactstrap';


export default function Dos(props) {
   
        return (
            <div>
             
                <h1>Dos</h1>
                <Input type='text' name='infor' id='infor' onChange={(infor)=>props.cambiar(infor.target.value)}  value={props.info} />
            </div >
        );
}
