require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

const app = express();

app.use(express.json());

app.set('port',port);


//rutas
app.use('/',require('./rutas'))


//iniciar express.
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('hay error al iniciar el servidor'+ error);
    }else {
        console.log('el servidor se ejecutó correctamente'+port);
    }
})