const express = require("express");
const router = express.Router();
const createService = require("../services/createServices");
const service = new createService();

router.get("/", async (req,res,next) =>{
    try {
        res.send("user create");
    } catch (error) {
        next(error)
    }
});

router.post("/create",async (req,res) =>{
    try {
        const {name, email, username, password} = req.body
        const dataUser = await service.crearEmpleado(name, email, username, password);
        res.json("created");
    } 
    catch (error) {
        console.log(error)
    }
});

module.exports = router