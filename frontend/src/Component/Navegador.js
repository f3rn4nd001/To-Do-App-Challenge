import React, { Component } from 'react';
import { BrowserRouter as Router,Route  } from 'react-router-dom';
import './css/Index.css';
import Login from './login';
import Perfil from './Perfil';
import Notas from './Notas';
import { decodeToken } from "react-jwt";
export default class Navegador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buscar:''
        }
        }

        Cerrarsecion= async e=>{
            e.preventDefault();
            localStorage.removeItem('token');
            window.location.href="/";
          }

          
       
    render() {
        let $RutaPerfil = null;
        let $RutaNotas = null;
        let tokenDes = decodeToken(localStorage.getItem('token'));
        let $tokenAll = null;
        let $cerrar_secion = null;       
        let $notas  = null;
        let $notanueva = null;
        if(tokenDes){
            if(tokenDes.role === 'Admin'){
                    $cerrar_secion=(
                       <div>
                       <li>
                            <a href="/">
                                    <i class="fa fa-group fa-2x"></i>
                                <span style={{fontSize:17}} class="nav-text">
                                    Iniciar sesión 
                                </span>
                            </a>
                        </li>  
                        <li> <a onClick={this.Cerrarsecion}>
                        <i class="fa"> <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                        </svg></i>
                         <span class="nav-text" > cerrar sesion</span> 
                            </a>
                       </li>
                       
                    </div> 
                    );
                $tokenAll = ( <a href="/perfil">
                <i class="fa "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg></i>
                 <span style={{fontSize:17}} class="nav-text">
                 Perfil
                 </span>
             </a>
             );
             $RutaPerfil=(<Route path='/Perfil' component={Perfil}></Route>);
             $RutaNotas=(
                 <Route path='/notas' component={Notas}></Route>
             );

                        $notas=(
               
                            <a href="/notas">
                            <i class="fa "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
               <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
               <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
             </svg></i>
                             <span style={{fontSize:17}} class="nav-text">
                             notas
                             </span>
                         </a>
             
                            );
        
            }

            if(tokenDes.role === 'Usuario'){
               $notas=(
               
               <a href="/notas">
               <i class="fa "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg></i>
                <span style={{fontSize:17}} class="nav-text">
                notas
                </span>
            </a>

               );
               
                    $cerrar_secion=(
                       <div>
                       <li>
                            <a href="/">
                                    <i class="fa fa-group fa-2x"></i>
                                <span style={{fontSize:17}} class="nav-text">
                                Iniciar sesión
                                </span>
                            </a>
                        </li>  
                         <li> <a onClick={this.Cerrarsecion}>
                        <i class="fa"> <svg xmlns="http://www.w3.org/2000/svg" width="19" height="29" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                        </svg></i>
                         <span class="nav-text" > cerrar sesion</span> 
                            </a>
                       </li>
                      
                    </div> 
                    );
                $tokenAll = ( <a href="/perfil">
                <i class="fa "><svg xmlns="http://www.w3.org/2000/svg" width="19" height="39" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg></i>
                 <span style={{fontSize:17}} class="nav-text">
                 Perfil
                 </span>
             </a>
             );
                        $RutaPerfil=(<Route path='/Perfil' component={Perfil}></Route>);
                        $RutaNotas=(
                            <Route path='/notas' component={Notas}></Route>
                        );
                    }
        
        }
        
        
      else{
      $tokenAll = (<a></a>);
      $cerrar_secion=(
        <li>
               <a href="/">
                     <i class="fa fa-group fa-2x"></i>
                    <span style={{fontSize:17}} class="nav-text">
                        Iniciar sesión 
                    </span>
                </a>
            </li>  
    );
     
      }
        return (
            <html>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <body style={{background:"rgb(224 224 224)"}} >
                
              <div class="area"></div><nav class="main-menu">
                  
                <ul>
                    
                  
                    <li class="has-subnav ">
                    {$tokenAll}
                        
                    </li>
                    <li class="has-subnav ">
                        {$notas}
                    </li>
                   
                </ul>
            
                <ul class="logout">
                    
                    {$cerrar_secion}
                </ul>
            </nav>
            
            <div class="container" >
            <Router> 
                
                <Route path="/" exact component={Login}/>
                {$RutaPerfil}
                {$RutaNotas}
                
            </Router>
            </div>
            
            </body>
            </html>
        )
    }
}
