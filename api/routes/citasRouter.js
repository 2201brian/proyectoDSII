const express = require("express");
const router = express.Router();
const citasServices = require("../services/citasServices");
const service = new citasServices();
const {multer} = require("./../config/multer");

router.get("/", async (req,res,next) =>{
    try {
        res.send("user update");
    } catch (error) {
        next(error)
    }
});

router.post("/date",multer.single("uploadedFile"),async (req,res) =>{
    try {
        const {description, entidad, tipoCita, inicio,datefin,correo,nombre,telefono,email} = req.body
        
        if(req.file == undefined){
            const dataUser = await service.crearSolicitud("",description,entidad,inicio,datefin,correo,tipoCita,nombre,telefono,email);
        }else{
            const dataUser = await service.crearSolicitud(req.file.originalname,description,entidad,inicio,datefin,correo,tipoCita,nombre,telefono,email);
        }
        res.json("creada");
    } 
    catch (error) {
        console.log(error)
    }
});

module.exports = router