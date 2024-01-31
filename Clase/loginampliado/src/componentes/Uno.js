import React, { useState } from 'react';
import {
   Button,Input
} from 'reactstrap';


export default function Uno(props) {

    return (
        <div>
         
            <h1>UNO</h1>
            
            <Input type='text' name='infor' id='infor' onChange={(infor)=>props.cambiar(infor.target.value)}  value={props.info} />
            
        </div >
    );
}