import React, { Component } from 'react'

import axios from 'axios';
import './css/Perfil.css';
export default class Perfil extends Component {
    state={
        users:[]
    }
    
        async componentDidMount(){
            const res = await axios.get('http://localhost:3001/api/Usuarios/Perfil',{headers:{'token':localStorage.getItem('token')}});
            this.setState({users: res.data});
           
        }
    render() {
        return (
                <div style={{minHeight:"670px"}} >
                     <div className="container-fluid">
                <br/>
                <div className="col-md-12">
                    <ol style={{background:"rgb(92 90 90)",borderRadius:"10px"}}  className="col-md-1 breadcrumb">
                    
                    <li style={{color: "white"}}> <i style={{color: "white"}} class="fa fa-2x"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg> Perfil</i></li>
                    </ol>
                </div> 
                </div>
     <link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One" rel="stylesheet"/>

<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>


{this.state.users.map(user => (
    <div class="info_items" >
        <img key={user._id} class="usu" src={user.imagen}/>
        <div class="info">
            <h2>{user.PrimerNombre} {user.SegundoNombre} {user.PrimerApellido} {user.SegundoApellido} </h2>
            
            <label>Correo electrónico :</label>
            <input type="text" value={user.email} disabled/>
            <label>Género :</label>
            <input type="text" value={user.Sexo} disabled/>
            <label>Fecha de Nacimiento :</label>
            <input type="text" value={user.Edad} disabled/>
            <label>Teléfono :</label>
            <input type="text" value={user.Telefono} disabled/>
            
        </div>
        
    </div>
))}
    </div> 
   
   
        )
    }
}