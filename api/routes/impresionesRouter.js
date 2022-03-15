const express = require("express");
const router = express.Router();
const impresionesServices = require("../services/impresionesServices");
const impservices = new impresionesServices();
const {multer} = require("./../config/multer");

router.get("/", async(req,res,next) =>{
    try {    
        res.json({ message: 'print queue a live' });
    } catch (error) {
        next(error)
    }
});


router.post("/print",multer.single("a_file"), async (req,res,next) =>{
    try {
        
        const{description,quantity,color,laminado} = req.body;
        
        const create = await impservices.crearSolicitud(req.file.originalname,description,quantity,color,laminado);
        
        res.json({ message: '${filename} file add to queue' });
        
    } catch (error) {
        next(error)
    }
});

module.exports = router