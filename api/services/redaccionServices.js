const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class redaccionServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearSolicitud(name,description,date,email) {
        const query =  `insert into solicitud_redaccion values (default,'${name}','${description}','${date}','${email}')`;
        const [data] = await sequelize.query(query);
        return true;
      }
    }
    
module.exports = redaccionServices;