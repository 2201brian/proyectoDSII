const express = require("express");
const router = express.Router();
const listarUserServices = require("./../services/listarUserServices");
const listar = new listarUserServices();

router.get("/", async(req,res,next) =>{
    try {    
        res.json({ message: 'print queue a live' });
    } catch (error) {
        next(error)
    }
});

router.get("/all",async (req,res,next) =>{
    try {
        const rows = await listar.listarEmpleado();
        res.send(rows);
    }
     catch (error) {
        next(error)
    }
});

module.exports = router
