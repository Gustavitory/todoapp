const express=require("express");
const routertasks=express.Router();
const {getTasks}=require('../../../db/controllers/tasks')


routertasks.get('/',getTasks)

module.exports=routertasks