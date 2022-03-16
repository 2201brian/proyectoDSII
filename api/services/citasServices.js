const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class citasServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearSolicitud(name,description,entity,initial_date,final_date,schedule,type) {
        const query =  `insert into solicitud_agendamiento_cita values 
        (default,'${name}','${description}','${entity}','${initial_date}','${final_date}','${schedule}','${type}')`;
        const [data] = await sequelize.query(query);
        return true;
      }
    }
    
module.exports = citasServices;