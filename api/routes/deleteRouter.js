const express = require("express");
const router = express.Router();
const deleteServices = require("../services/deleteServices");
const service = new deleteServices();
const impServices = require("../services/impresionesServices");
const service2 = new impServices();
const citasServices = require("../services/citasServices");
const service3 = new citasServices();
const redaServices = require("../services/redaccionServices");
const service4 = new redaServices();
const reciboServices = require("../services/recibosServices");
const service5 = new reciboServices();

router.get("/", async (req,res,next) =>{
    try {
        res.send("create user");
    } catch (error) {
        next(error)
    }
});

router.post("/user",async (req,res) =>{
    try {
        const {id_empleado} = req.body
        const dataUser = await service.busquedaPreDelete(id_empleado);
        if(dataUser){
            console.log("Eliminado ");
            res.json("eliminado");
        }
        else{
            console.log("No Eliminado ");
            res.json("no eliminado");
        }
    } 
    catch (error) {
        console.log(error)
    }
});

router.post("/print",async (req,res) =>{
    try {
        const {id_sol} = req.body
        const dataUser = await service2.busquedaPreDelete(id_sol);
        if(dataUser){
            console.log("Eliminado ");
            res.json("eliminado");
        }
        else{
            console.log("No Eliminado ");
            res.json("no eliminado");
        }
    } 
    catch (error) {
        console.log(error)
    }
});

router.post("/citas",async (req,res) =>{
    try {
        const {id_sol} = req.body
        const dataUser = await service3.busquedaPreDelete(id_sol);
        if(dataUser){
            console.log("Eliminado ");
            res.json("eliminado");
        }
        else{
            console.log("No Eliminado ");
            res.json("no eliminado");
        }
    } 
    catch (error) {
        console.log(error)
    }
});
router.post("/redact",async (req,res) =>{
    try {
        const {id_sol} = req.body
        const dataUser = await service4.busquedaPreDelete(id_sol);
        if(dataUser){
            console.log("Eliminado ");
            res.json("eliminado");
        }
        else{
            console.log("No Eliminado ");
            res.json("no eliminado");
        }
    } 
    catch (error) {
        console.log(error)
    }
});
router.post("/recibos",async (req,res) =>{
    try {
        const {id_sol} = req.body
        const dataUser = await service5.busquedaPreDelete(id_sol);
        if(dataUser){
            console.log("Eliminado ");
            res.json("eliminado");
        }
        else{
            console.log("No Eliminado ");
            res.json("no eliminado");
        }
    } 
    catch (error) {
        console.log(error)
    }
});
module.exports = router