const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class createServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearEmpleado(name, email, id, password) {
        const query =  `INSERT INTO empleados VALUES('${name}', '${email}', '${id}', '${password}')`;
        const [data] = await sequelize.query(query);
        const revisar = this.revisarEmpleado(id,name);
        return revisar;
        //const comprobar = this.revisarEmpleado(id, name);
        /*if(revisar > 0)
          return true;
        else
          return false;
        */
      }

async revisarEmpleado(id, name) {
        const query2 = `SELECT id_empleado, nombre FROM empleados WHERE id_empleado = '${id}' AND nombre = '${name}'`;
        const [data] = await sequelize.query(query2);
        return data;
    }
}

module.exports = createServices;