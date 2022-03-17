const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class citasServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearSolicitud(name,description,entity,initial_date,final_date,schedule,type,nombre,telefono,email) {
        const query =  `insert into solicitud_agendamiento_cita values 
        (default,'${name}','${description}','${entity}','${initial_date}','${final_date}','${schedule}','${type}','${nombre}','${telefono}','${email}')`;
        const [data] = await sequelize.query(query);
        return true;
      }
    

async deleteCita(id) {
      const query =  `delete from solicitud_agendamiento_cita where id_sol = '${id}'`;
      const [data] = await sequelize.query(query);
      //return true;
    }

async busquedaPreDelete(id){
  const query = `select id_sol from solicitud_agendamiento_cita where id_sol = '${id}'`;
  const [id_sol] = await sequelize.query(query,{ type: QueryTypes.SELECT });
  if(id_sol == undefined){
      return false;
  }else{
      this.deleteCita(id_sol.id_sol);
      return true;
  }
}

}
module.exports = citasServices;