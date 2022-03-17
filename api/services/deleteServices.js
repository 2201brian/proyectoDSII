const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");
const { QueryTypes } = require('@sequelize/core');

class deleteServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async deleteEmpleado(id) {
        const query =  `delete from empleados where id_empleado = '${id}'`;
        const [data] = await sequelize.query(query);
        //return true;
      }

async busquedaPreDelete(id){
    const query = `select id_empleado from empleados where id_empleado = '${id}'`;
    const [id_empleado] = await sequelize.query(query,{ type: QueryTypes.SELECT });
    if(id_empleado == undefined){
        return false;
    }else{
        this.deleteEmpleado(id_empleado.id_empleado);
        return true;
    }
    }
}
module.exports = deleteServices;
