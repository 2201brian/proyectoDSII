const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class reciboServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearSolicitud(cedula,contrato,pagoelectronico,descripcion,correo) {
        const query =  `insert into solicitud_recibos values
        (default,'${cedula}','${contrato}','${pagoelectronico}','${descripcion}','${correo}')`;
        const [data] = await sequelize.query(query);
        //return true;
      }
    }
    
module.exports = reciboServices;