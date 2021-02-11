const express =require('express');
const NotasRoutes = express.Router();
const {verificarToken} = require('../Mid/Token');
const NotasController=require('../Controllers/NotaController');
NotasRoutes.MostarAll=(NotasController.GetNotas);
NotasRoutes.Crear=(NotasController.PostNotas);
NotasRoutes.Eliminar=(NotasController.DeleteNota);
module.exports = NotasRoutes;