const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class actualizarServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async actualizarEmpleado(name, email, id, password) {
        const query =  `update empleados set nombre = '${name}', email = '${email}', contraseña = '${password}' where id_empleado = '${id}'`;
        const [data] = await sequelize.query(query);
        return true;
      }
    }


module.exports = actualizarServices;