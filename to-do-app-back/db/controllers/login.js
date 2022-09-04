const jwt=require('jsonwebtoken');
const {User}=require('../db');
const moment=require('moment');

async function login (req,res){
    const {email,password}=req.headers;
    if(!email||!password) return res.status(401).json({status:false,message:'El email y password son requeridos.'})
    try{
        const user= await User.findOne({where:{email:email}})
        const userExist=user? await user.validPassword(password):false;
        if(!userExist){
            return res.status(401).json({
                status:false,
                error:'Invalid user or password'
            })
        }
        else{
           const userForToken={
                id:user.id,
                iat:moment().unix(),
                exp:moment().add(10,'days').unix()
            }
            const token=jwt.sign(userForToken,process.env.SECRET)
                return res.send({
                    status:true,
                    token
                }) 
        }
        
    }catch{e=>res.status(401).json({status:false,error:'error con el manejo de los datos'})}
}

module.exports=login