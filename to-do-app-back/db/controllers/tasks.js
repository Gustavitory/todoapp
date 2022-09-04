const jwt = require('jsonwebtoken');
const {Task}=require('../db');


async function getTasks(req,res){
    const {token}=req.headers
    const {id}=jwt.decode(token,process.env.SECRET);
    if(!token) return res.status(401).json({status:false,message:'Token is required'})
    try{
        const tasks= await Task.findAll({
            where:{userId:id},
            // include:[User],
            attributes:{
                exclude:['createdAt','updatedAt','userId']
            }
        })
        if (!tasks) return res.status(401).json({status:false,message:'No existen tareas'})
        else return res.send({status:true,tasks})

    }
    catch{(e)=>console.log(e,'Error en funcion getTasks')}
}

module.exports={getTasks}