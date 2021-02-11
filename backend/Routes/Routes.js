const express =require('express');
const router = express.Router();
const {verificarToken} = require('../Mid/Token');
const UsuarioRoutes = require('./UsuariosRoutes');
const NotasRoutes = require('./NotasRoutes');
router.post('/Usuarios',UsuarioRoutes.Crear);
router.post('/Usuarios/Login/',UsuarioRoutes.Iniciar);
router.get('/Usuarios/perfil',verificarToken,UsuarioRoutes.Perfil);

router.get('/Notas',verificarToken,NotasRoutes.MostarAll);
router.post('/Notas/Crear',verificarToken,NotasRoutes.Crear);
router.delete('/Notas/eliminar/',verificarToken,NotasRoutes.Eliminar),
module.exports = router;