const express = require("express");
//const { UPSERT } = require("sequelize/dist/lib/query-types");
const router = express.Router();
const loginService = require("../services/loginServices");
const service = new loginService();

router.get("/", async (req,res,next) =>{
    try {
        res.send("estas en login");
    } catch (error) {
        next(error)
    }
});

router.post("/prueba",async (req,res,next) =>{
    try {
    const {usuario,contraseña} = req.body
    const products = await service.find(usuario,contraseña);
    //res.json(products);
    //console.log(products)

    if(products)
        res.json("encontrado")
    else
        res.json("no encontrado")

    } catch (error) {
        next(error)
    }
});

module.exports = router
