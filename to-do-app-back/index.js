const bcrypt=require('bcrypt');
const app = require('./app/app');
const { conn,User,Task } = require('./db/db');

const PORT = process.env.PORT || 3001;

conn.sync({ alter: true,force:true })
    .then(() => {
        app.listen(PORT, () => {           
            console.log(`Server listening at ${PORT}`);
        });
    })
    .then(()=>{
        User.create({name:'gustavo',password:'12345',email:'correo'})
        Task.create({name:'tarea',description:'ololo'})
        // bcrypt.compare('hola',bcrypt.hash('hola','coloco')).then(r=>console.log(r))
        
    })
    .catch(e => console.log('ERROR :( ' + e));