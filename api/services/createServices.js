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
        return (await revisar).length;
      
      }


async revisarEmpleado(id, name) {
        const query2 = `SELECT id_empleado, nombre FROM empleados WHERE id_empleado = '${id}' AND nombre = '${name}'`;
        const [result] = await sequelize.query(query2);
        return  result;
    }
}

module.exports = createServices;