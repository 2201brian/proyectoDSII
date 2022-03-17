const express = require("express");
const router = express.Router();
const seleccion = require("../services/seleccionarServices");
const service = new seleccion();

router.get("/", async (req,res,next) =>{
    try {
        res.send("estas en login");
    } catch (error) {
        next(error)
    }
});

router.get("/Impresiones",async (req,res,next) =>{
    try {
        const rows = await service.servicioImpresion();
        res.send(rows);
    }
     catch (error) {
        next(error)
    }
});

router.get("/Redaccion",async (req,res,next) =>{
    try {
        const rows = await service.servicioRedaccion();
        res.send(rows);
    }
     catch (error) {
        next(error)
    }
});

router.get("/Citas",async (req,res,next) =>{
    try {
        const rows = await service.servicioCitas();
        res.send(rows);
    }
     catch (error) {
        next(error)
    }
});

router.get("/Recibo",async (req,res,next) =>{
    try {
        const rows = await service.servicioRecibos();
        res.send(rows);
    }
     catch (error) {
        next(error)
    }
});

module.exports = router