const express=require("express");
const login = require("../../../db/controllers/login");
const routerLogin=express.Router();


routerLogin.get('/',login)

module.exports=routerLogin