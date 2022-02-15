const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");
//const multer = require("multer");

class impresionesServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearSolicitud(name,description,quantity,color,laminate,complete){
    const query =  `INSERT INTO solicitud_impresiones VALUES('${name}', '${description}', '${quantity}', '${color}', '${laminate}', 'NO')`;
    const [data] = await sequelize.query(query);
}


}

module.exports = impresionesServices;