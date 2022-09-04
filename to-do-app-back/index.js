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
        Task.create({name:'tarea',description:'ololo'})
        .then(task=>User.create({name:'gustavo',password:'12345',email:'correo@correo.com'}).then(user=>user.addTask(task.id)))
        
        
    })
    .catch(e => console.log('ERROR :( ' + e));