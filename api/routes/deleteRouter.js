const express = require("express");
const router = express.Router();
const deleteServices = require("../services/deleteServices");
const service = new deleteServices();

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

module.exports = router