const express = require("express");
const router = express.Router();
const loginService = require("../services/loginServices");
const service = new loginService();
const validatorHandler = require("./../schemas/validator");
const {loginUser} = require("./../schemas/userSchema");
const seleccion = require("../services/seleccionarServices");
const service2 = new seleccion();

router.get("/", async (req,res,next) =>{
    try {
        const data = await service2.servicioImpresion();
        console.log(data);
        res.send(data);
    } catch (error) {
        next(error)
    }
});

//router.post("/check",validatorHandler(loginUser,"body"),async (req,res,next) =>{
    router.post("/check",async (req,res,next) =>{
    try {
    const {username,password} = req.body
    const login = await service.find(username,password);
    if(login){
        res.json("Found")
    }
    else{
        res.json("Not Registered")
    } 
    } catch (error) {
        next(error)
    }
});

module.exports = router