const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class redaccionServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearSolicitud(name,description,date,email,nombre,telefono,email) {
        const query =  `insert into solicitud_redaccion values (default,'${name}','${description}','${date}','${email}','${nombre}','${telefono}','${email}')`;
        const [data] = await sequelize.query(query);
        return true;
      }

      async deleteRedaccion(id) {
        const query =  `delete from solicitud_redaccion where id_sol = '${id}'`;
        const [data] = await sequelize.query(query);
        //return true;
      }
    
    async busquedaPreDelete(id){
    const query = `select id_sol from solicitud_redaccion where id_sol = '${id}'`;
    const [id_sol] = await sequelize.query(query,{ type: QueryTypes.SELECT });
    if(id_sol == undefined){
        return false;
    }else{
        this.deleteRedaccion(id_sol.id_sol);
        return true;
    }

    }

    }
    
module.exports = redaccionServices;