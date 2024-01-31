import './App.css';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogin from './componentes/AppLogin'
import Menu from './componentes/Menu'
import { Component } from 'react';
import {PHPLOGIN} from './componentes/Datos';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      menuItem:"",
      logged:false,
      info:"",
    }
  }
  cambiar(valor){
    this.setState({info:valor})

  }
  changeMenu(item){
    this.setState({menuItem:item})
  }

  userLogin(telefono,password){
    axios.post(PHPLOGIN,JSON.stringify({
      telefono:telefono,
      password:password,
    }))
    .then(res => {
      console.log(res.data.usuario);
      if ( res.data.usuario !== undefined){
        this.setState({logged:true});
      }
    })
  }

  render(){
    let obj=<><Menu menuItem={this.state.menuItem} changeMenu={(item)=>this.changeMenu(item)} cambiar={(valor)=>this.cambiar(valor)} informacion={this.state.info}/></>
    if (!this.state.logged){
      obj=<AppLogin userLogin={(telefono,password)=>this.userLogin(telefono,password)}/>
      
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;