const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class loginServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async find(user,pass) {
        const query =  `SELECT id_empleado,contraseña FROM empleados where id_empleado= '${user}' and contraseña = '${pass}'`;
        const [data] = await sequelize.query(query);

        //console.log(data.length);
        if(data.length > 0)
          return true;
        else
          return false;
        /*return {
          data
        };*/
      }
}

module.exports = loginServices;
