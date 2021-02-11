const jwt = require('jsonwebtoken');
const  UsuarioModel = require('../Model/UsuariosModel');
const NotasModel =require('../Model/NotasModel');
const NotasController ={}


NotasController.GetNotas=async (req,res)=>{  
  

  return res.json(await NotasModel.find().where('idUs').equals(req.usuarioToken))
}

NotasController.PostNotas = async (req,res)=>{
  const {titulo,nota,fecha}=(req.body);
  const notag = await new NotasModel({titulo,nota,idUs:req.usuarioToken,fecha});
  await notag.save();
  return res.send({message:'Nota guardado','success':true});
     
}

NotasController.DeleteNota= async (req,res)=>{
  
    const {eliminar} =(req.body);      
    const usuario = await NotasModel.findById(eliminar).where('idUs').equals(req.usuarioToken);                    
    if(!usuario){ return res.send({message:'La Nota no pudo se eliminada','success':false});
    }
    else{
        await NotasModel.findByIdAndDelete(eliminar).where('idUs').equals(req.usuarioToken);  
        return res.send({message:'Nota eliminada','success':true});
    }
}


module.exports=NotasController;