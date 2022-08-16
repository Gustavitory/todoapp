
const app = require('./app/app');
const { conn } = require('./db/db');

const PORT = process.env.PORT || 3001;

conn.sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => {           
            console.log(`Server listening at ${PORT}`);
        });
    })
    .catch(e => console.log('ERROR :( ' + e));