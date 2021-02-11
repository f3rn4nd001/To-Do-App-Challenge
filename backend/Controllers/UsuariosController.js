const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UsuarioModel = require('../Model/UsuariosModel');
const UsuarioController ={}


UsuarioController.GetUsuariosperfil=async (req,res)=>{
      
    return res.json( [await UsuarioModel.findOne({_id:req.usuarioToken})]);
    
}

UsuarioController.PostUsuarios=async(req,res)=>{
    const {PrimerNombre,SegundoNombre,PrimerApellido,SegundoApellido,email,password,password_conf,imagen,Sexo,Edad,Telefono}=(req.body);
    console.log( {PrimerNombre,SegundoNombre,PrimerApellido,SegundoApellido,email,password,password_conf,imagen,Sexo,Edad,Telefono});
    const errors = [];
    const guardado = [];

    if(!PrimerApellido){
        res.send({message: 'El campo Primer Apellido  no puede estar vacio','success':false,});
        errors.push({ text: 'El campo Primer Primer Apellido no puede estar vacio'});
    }
    if(!/^[a-z]+$/i.test(PrimerApellido)){
        throw res.send({'success':false,message: 'El campo Primer Apellido tiene que constar con letras de la a-z y sin espacios'});
        errors.push({ text: 'El campo campo Primer Apellido no puede estar vacio'});
      }
      if(!/^[a-z]+$/i.test(SegundoApellido)){
        throw res.send({'success':false,message: 'El campo Segundo Apellido tiene que constar con letras de la a-z y sin espacios'});
        errors.push({ text: 'El campo campo Segundo Apellido no puede estar vacio'});
      }
      if(!/^[a-z]+$/i.test(SegundoNombre)){
        throw res.send({'success':false,message: 'El campo Segundo Nombre tiene que constar con letras de la a-z y sin espacios'});
        errors.push({ text: 'El campo campo Segundo Nombre no puede estar vacio'});
      }
      if(typeof PrimerApellido !== 'string'){
        throw res.send({'success':false,message: 'El noPrimer Apellido  tiene que ser letras'});
        errors.push({ text: 'El Primer Apellido re tiene que ser letras'});
      }
    if(!PrimerNombre){
        res.send({message: 'El campo Primer Nombre no puede estar vacio','success':false,});
        errors.push({ text: 'El campo Primer Nombre no puede estar vacio','success':false});
    }
    if(typeof PrimerApellido !== 'string'){
        throw res.send({'success':false,message: 'El Primer Apellido  tiene que ser letras'});
        errors.push({ text: 'El Primer Apellido re tiene que ser letras'});
      }
    if(!/^[a-z]+$/i.test(PrimerNombre)){
        throw res.send({'success':false,message: 'El campo campo Primer Nombre tiene que constar con letras de la a-z y sin espacios'});
        errors.push({ text: 'El campo campo campo Primer Nombre no puede estar vacio'});
      }
    if(password != password_conf){
        res.send({message:' la contraseña no coinide' ,'success':false});
        errors.push({ text: ' la contraseña no coinide','success':false});
    }
    if(!password_conf){
        res.send({message: 'El campo password no puede estar vacio','success':false,});
        errors.push({ text: 'El campo password no puede estar vacio','success':false});
    }
    if(password_conf.length<4){
        res.send({message:'la contraseña tiene que se mayor a 4 digitos' ,'success':false,});
        errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos'});        
    }
    if(password.length<4){
        res.send({message: 'la contraseña tiene que se mayor a 4 digitos','success':false,});
        errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos','success':false});        
    }
    if (!password ) {
        res.send({message: 'El campo password no puede estar vacio','success':false,});
        errors.push({ text: 'El campo password no puede estar vacio','success':false});
    } 
    if (!email) {
        res.send({message: 'El campo email no puede estar vacio','success':false,});
        errors.push({ text: 'El campo email no puede estar vacio','success':false});
    } 
    if(!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/i.test(email)){
        res.send({'success':false,message: 'asegurese que el email es correcto'});
        errors.push({ text: 'El campo email no puede estar vacio'});
      }
    if (!Telefono) {
        res.send({ message:'El campo telefono no puede estar vacio','success':false,});
        errors.push({ text: 'El campo telefono no puede estar vacio','success':false });
    }
   
    if (errors.length > 0) {
        console.log({errors,});
    } 
    else {
        const emailUsuario =await UsuarioModel.findOne({email:email});
        if(emailUsuario) {res.send({message:"El gmail fue registrado con anteriolidad",'success':false});
        errors.push({message:"El gmail fue registrado con anteriolidad",'success':false});
        } 
        else {
            res.send({message:'Datos de usuario guardados','success':true});
            guardado.push({message:'Datos de usuario guardados','success':true});
            const usuario = await new UsuarioModel({password:bcrypt.hashSync(password,10),PrimerNombre,SegundoNombre,PrimerApellido,SegundoApellido,email,imagen,Sexo,Edad,Telefono});
            res.json(await usuario.save());
        
        } 
    }
}


UsuarioController.DeleteUsuario= async (req,res)=>{  
    //const idToken= await usuarioModel.findOne({_id:req.usuarioToken});
    //if(idToken.role==='Admin'){          
    const usuario = await UsuarioModel.findById(req.params.id);                    
    if(!usuario){res.json('Usuario no encontrado');
    }
    else{
        await UsuarioModel.findByIdAndDelete(req.params.id);  
        return res.json('Usuario eliminado');
    }
    //}
}

UsuarioController.PostLoginUsuario=  async (req,res,next)=>{  
    const {email,password}=(req.body);
    const errors = [];
    if(password.length<4){
        res.send({message: 'la contraseña tiene que se mayor a 4 digitos','success':false,});
        errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos','success':false});        
    }
    if (!password ) {
        res.send({message: 'El campo password no puede estar vacio','success':false,});
        errors.push({ text: 'El campo password no puede estar vacio','success':false});
    } 
    if (!email) {
        res.send({message: 'El campo email no puede estar vacio','success':false,});
        errors.push({ text: 'El campo email no puede estar vacio','success':false});
    if(!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/i.test(email)){
        throw res.send({'success':false,message: 'asegurese que el email es correcto'});
        errors.push({ text: 'El campo email no puede estar vacio'});
    }
    } if (errors.length > 0) {
        console.log({errors,});
    }
    else{
        const emailUsuario =await UsuarioModel.findOne({email:email});
        if(emailUsuario) {
            if(bcrypt.compareSync(password,emailUsuario.password)){
                const token =jwt.sign({usuario:emailUsuario._id,role:emailUsuario.role
            },'token-de-desarrollo',{expiresIn: 60*60*24});
            res.send({message:"mensaje ",'Token':token,'success':true})
        }
        else{
            res.send({message:"no entra paswor incorecto",'success':false})  
        }
    }
    else{res.send({message:"no entra email incorecto",'success':false});
    }}
}    

module.exports=UsuarioController;