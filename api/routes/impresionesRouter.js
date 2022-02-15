const express = require("express");
const router = express.Router();
const multer = require("multer");
const impresionesServices = require("../services/impresionesServices");
const impservices = new impresionesServices();

const storage = multer.diskStorage({
    destination: "/../../uploads",
    filename: function(req,file,cb){
        cb("",file.originalname);
    }
});

const upload = multer({
    storage: storage
})


router.get("/",async (req,res,next) =>{
    try {
        res.json("Estas en el server de impresiones");
    } catch (error) {
        next(error)
    }
});

router.get("/Servicio",upload.single("uploadedFile"), async (req,res,next) =>{
    try {
        const{file,description,quantity,color,laminate} = req.body;
        impservices.crearSolicitud(file.name,description,quantity,color,laminate);
        res.json("Solicitud de impresion creada");
    } catch (error) {
        next(error)
    }
});