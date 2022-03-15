const express = require("express");
const router = express.Router();
const redaccionServices = require("../services/redaccionServices");
const redactservices = new redaccionServices();
const {multer} = require("./../config/multer");

router.get("/", async(req,res,next) =>{
    try {    
        res.json({ message: 'print queue a live' });
    } catch (error) {
        next(error)
    }
});


router.post("/request",multer.single("uploadedFiles"), async (req,res,next) =>{
    try {
        const{description,date,correo} = req.body;
        
        const create = await redactservices.crearSolicitud(req.file.originalname,description,date,correo);
        if(create){
            res.json("Solicitud creada");
        }
        
        
    } catch (error) {
        next(error)
    }
});

module.exports = router