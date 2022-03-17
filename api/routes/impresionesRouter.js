const express = require("express");
const router = express.Router();
const impresionesServices = require("../services/impresionesServices");
const impservices = new impresionesServices();
const {multer} = require("./../config/multer");
//const descarga = require("./../services/descargarFiles");

//const { getStorage, ref, getDownloadURL } = require("Firebase");
//const { getStorage, ref, getDownloadURL } = require("multer-firebase-storage");
router.get("/", async(req,res,next) =>{
    try {    
        res.json({ message: 'print queue a live' });
    } catch (error) {
        next(error)
    }
});


router.post("/print",multer.single("a_file"), async (req,res,next) =>{
    try {
        const{description,quantity,color,laminado,nombre,telefono,email} = req.body;
        const create = await impservices.crearSolicitud(req.file.originalname,description,quantity,color,laminado,nombre,telefono,email);
        const id_soli = await impservices.returnID(req.file.originalname);
        //res.json(id_soli);
       // obtenerIdDown(req.file.originalname);
        
    } catch (error) {
        next(error)
    }
});



module.exports = router