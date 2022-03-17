const express = require("express");
const router = express.Router();
const recibosServices = require("../services/recibosServices");
const recibo = new recibosServices();

router.get("/", async(req,res,next) =>{
    try {    
        res.json({ message: 'print queue a live' });
    } catch (error) {
        next(error)
    }
});


router.post("/receipt",async (req,res,next) =>{
    try {
        const{identification,contract,pay,description,correo} = req.body;
        const create = await recibo.crearSolicitud(identification,contract,pay,description,correo);
       // if(create){
        res.json("Solicitud creada");
        //}
    } catch (error) {
        next(error)
    }
});

module.exports = router