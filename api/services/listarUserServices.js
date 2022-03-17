const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class listarUserServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async listarEmpleado() {
        const query =  `select * from empleados`;
        const [result] = await sequelize.query(query);
        return result;
      }
    }


module.exports = listarUserServices;