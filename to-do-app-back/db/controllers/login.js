const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {User}=require('../db');

async function login (req,res){
    const {email,password}=req.body;
    try{
        const user= await User.findOne({where:{email:email}})
        const userExist=user===null?false:
        user.validPassword(password);
        // await bcrypt.compare(password,user.password);
        if(!userExist){
            res.status(401).json({
                status:false,
                error:'Invalid user or password'
            })
        }
        const userForToken={
            name:user.name,
            id:user.id,
            email:user.email
        }
        const token=jwt.sign(userForToken,process.env.SECRET)
        res.send({
            name:user.name,
            id:user.id,
            email:user.email,
            token
        })
    }catch{e=>res.status(401).json({status:false,error:'error con el manejo de los datos'})}
}

module.exports=login