const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");
const { QueryTypes } = require('@sequelize/core');
class impresionesServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearSolicitud(name, description, quantity, color, laminate,nombre,email,telefono) {
        const query =  `INSERT INTO solicitud_impresiones VALUES(default,'${name}', '${description}', '${quantity}', '${color}' ,'${laminate}', 'NO','${nombre}','${email}','${telefono}')`;
      
       const [data] = await sequelize.query(query)
       
       return true;
    }

async returnID(name){
    const query = `select id_sol from solicitud_impresiones where nombre_archivo = '${name}'`;
    const [id_sol] = await sequelize.query(query,{ type: QueryTypes.SELECT });
    const solicitud = id_sol.id_sol+" Solicitud impresion";
    return solicitud;
}
async deleteImpresion(id) {
    const query =  `delete from solicitud_impresiones where id_sol = '${id}'`;
    const [data] = await sequelize.query(query);
    //return true;
  }

async busquedaPreDelete(id){
const query = `select id_sol from solicitud_impresiones where id_sol = '${id}'`;
const [id_sol] = await sequelize.query(query,{ type: QueryTypes.SELECT });
if(id_sol == undefined){
    return false;
}else{
    this.deleteImpresion(id_sol.id_sol);
    return true;
}
}
}

module.exports = impresionesServices;