require("dotenv").config();
const express=require("express");
const router = require("./routes");
const cors=require('cors');
const routerLogin = require("./routes/login");
const {PORT}=process.env

const config={
    application:{
        cors:{
            server:[
                {
                origin:"*",
                credentials:true
                }
            ]
        }
    }
}

const app = express()

const port=PORT||3000

app.use(express.static('public'));

app.use(cors(config.application.cors.server))

app.use(express.json())

// app.use((req,res,next)=>{
//     console.log("ejecutando middleware base")
//     next();
// })

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/login',routerLogin);
app.use('/',router);


module.exports=app;