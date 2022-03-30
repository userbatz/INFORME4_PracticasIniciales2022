const conexion = require('./config/conexion')
const rutas = require('express').Router()

//asignamos rutas de la api

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//CRUD DE USUARIO......

//MOSTRAR
rutas.get('/usuario',(req,res)=>{
    let sql = 'select * from Users'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else {
            res.json(rows);
        }
    })

})


//BUSCAR
rutas.get('/usuario/:id',(req,res)=>{
    const{id}=req.params
    let sql = 'select * from Users where Carnet = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else {
            res.json(rows);
        }
    })
})

//REESTABLECER CONTRASEÑA:
rutas.put('/usuario',(req,res)=>{
    const{Carnet,Contra,Email} = req.body
    let sql = `update Users set
               Contra = '${Contra}'
               where Carnet = '${Carnet}' and Email='${Email}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else {
            res.json({
                status: 'CONTRASEÑA MODIFICADA CORRECTAMENTE'
            })
        }
    })
})



//registrar un nuevo usuario
rutas.post('/usuario',(req,res)=>{
    const {Carnet,Nombres,Apellidos,Contra,Email}= req.body

    let sql= `insert into Users(Carnet,Nombres,Apellidos,Contra,Email,Creditos) values('${Carnet}','${Nombres}','${Apellidos}','${Contra}','${Email}',0)`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else {
            res.json({status: 'USUARIO REGISTRADO CORRECTAMENTE'})
        }
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////


//CRUD DE 


/* rutas.get('/', function(req,res){
    res.send('ya funciona mi proyecto del informe 4')
}); */



module.exports=rutas