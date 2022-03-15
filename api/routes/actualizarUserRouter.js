const express = require("express");
const router = express.Router();
const actualizarService = require("../services/actualizarServices");
const service = new actualizarService();

router.get("/", async (req,res,next) =>{
    try {
        res.send("user update");
    } catch (error) {
        next(error)
    }
});

router.post("/update",async (req,res) =>{
    try {
        const {name, email, username, password} = req.body
        const dataUser = await service.actualizarEmpleado(name, email, username, password);
        if(dataUser){
            res.json("updated");
        }
    } 
    catch (error) {
        console.log(error)
    }
});

module.exports = router