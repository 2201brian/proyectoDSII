const express = require('express');
const router = express.Router();
//const loginServices = require("../services/loginServices");
const validatorHandler = require('./../middlewares/validator.handler');
const {userSchema} = require("../schemas/loginSchema");
const loginService = require('../services/loginServices');
const ProductService = require("../services/product.service")
const service = new ProductService();

//const login = new loginServices();

router.post("/ingresar",
//validatorHandler(userSchema,"body"),
async (req,res,next) =>{
  try {
    const{usuario, contraseña} = req.body;
    const ingreso = await service.comprobarLogin(usuario,contraseña);
    if(ingreso){
      res.json("encontrado");
      console.log(ingreso);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router

