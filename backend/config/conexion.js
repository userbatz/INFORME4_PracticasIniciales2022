const mysql = require('mysql');
const conexion = mysql.createConnection({
    hots: 'hostname',
    user: 'root',
    password: '2022',
    port: 3306,
    database: 'db_informe4'
});

conexion.connect((err)=>{
    if(err){
        console.log("hay un error de conexión el problema es: "+err);
    } else {
        console.log("LA CONEXIÓN FUE REALIZADA CON ÉXITO...");
    }

})

module.exports= conexion;