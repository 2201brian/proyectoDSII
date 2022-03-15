const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class impresionesServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearSolicitud(name, description, quantity, color, laminate) {
        const query =  `INSERT INTO solicitud_impresiones VALUES(default,'${name}', '${description}', '${quantity}', '${color}' ,'${laminate}', 'NO')`;
      
       const [result,metadata] = await sequelize.query(query)
       
       return result,metadata;
      }

}

module.exports = impresionesServices;