const pool = require("../libs/postgresPool");
const sequelize = require("../libs/sequelize");


class loginServices{
  constructor() {

    this.pool = pool;
    this.pool.on("error",(err) => console.error(err));
  }

  async comprobarLogin(user,pass){
      const query = `SELECT usuario,contraseña from empleados where usuario ='${user}' and contraseña = '${pass}'`;
      const [data] = await this.pool.query(query);
      return {
        data
      };
  }



}
