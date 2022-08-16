const express=require("express");
const routertasks=express.Router();


routertasks.get('/',(req,res,next)=>{
    res.send("esto devolvera las tasks")
})

module.exports=routertasks