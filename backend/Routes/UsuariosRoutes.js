const express =require('express');
const UsuarioRoutes = express.Router();
const {verificarToken} = require('../Mid/Token');
const UsuarioController=require('../Controllers/UsuariosController');
UsuarioRoutes.Crear=('/',UsuarioController.PostUsuarios);
UsuarioRoutes.Iniciar=(UsuarioController.PostLoginUsuario);
UsuarioRoutes.Perfil=(UsuarioController.GetUsuariosperfil)

module.exports = UsuarioRoutes;