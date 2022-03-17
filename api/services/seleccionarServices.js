const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");
const { QueryTypes } = require('@sequelize/core');

class seleccionarServices{
    constructor(){
    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
    }

    async servicioImpresion() {
      const query =  `select * from solicitud_impresiones`;
      const [result] = await sequelize.query(query);
      return result;
    }
    
async servicioRedaccion() {
        const query =  `select * from solicitud_redaccion`;
        const [result] = await sequelize.query(query);
        return result;
      }
    
async servicioCitas() {
        const query =  `select * from solicitud_agendamiento_cita`;
        const [result] = await sequelize.query(query);
        return result;
      }
async servicioRecibos() {
        const query =  `select * from solicitud_recibos`;
        const [result] = await sequelize.query(query);
        return result;
      }
    }
module.exports = seleccionarServices;