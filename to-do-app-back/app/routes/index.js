const express=require("express")
const routertasks = require("./tasks")
const router=express.Router()

router.use((req,res,next)=>{
    console.log('ejecutando middleware')
    next()//el next es importante porque ejecuta el middleware y luego procesa la llamada
    //puedo hacer validaciones con el middleware y si no se cumple sencillamente omito el next
})

router.use("/tasks",routertasks);

module.exports=router