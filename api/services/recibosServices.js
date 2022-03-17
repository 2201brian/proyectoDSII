const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");

class reciboServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

async crearSolicitud(cedula,contrato,pagoelectronico,descripcion,correo,nombre,telefono,email) {
        const query =  `insert into solicitud_recibos values
        (default,'${cedula}','${contrato}','${pagoelectronico}','${descripcion}','${correo}','${nombre}','${telefono}','${email}')`;
        const [data] = await sequelize.query(query);
        //return true;
      }
  async deleteRecibo(id) {
        const query =  `delete from solicitud_recibos where id_sol = '${id}'`;
        const [data] = await sequelize.query(query);
        //return true;
      }
    
    async busquedaPreDelete(id){
    const query = `select id_sol from solicitud_recibos where id_sol = '${id}'`;
    const [id_sol] = await sequelize.query(query,{ type: QueryTypes.SELECT });
    if(id_sol == undefined){
        return false;
    }else{
        this.deleteRecibo(id_sol.id_sol);
        return true;
    }

    }

  }
module.exports = reciboServices;