import logo from './logo.svg';
import './App.css';
import {Button,Input,Row,Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component,useState} from 'react'
import ReactDOM from "react-dom";

//componente principal
function App (props) {
  const  [deseos,setDeseos]=useState(["CASA","DINERO"])
  const quitar=(e)=>{
    setDeseos(deseos.filter(d=>d!=e))
 }
  
  return (
    <div className="App">
     <h2>Lista de Deseos</h2>
     <ListaDeseos
     deseos={deseos}
     borrar={(e)=>quitar(e)}
     />
     <Deseo

     />
    </div>
  );
}


export default App;
