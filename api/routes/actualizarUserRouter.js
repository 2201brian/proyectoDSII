const express = require("express");
const router = express.Router();
const actualizarService = require("../services/actualizarServices");
const service = new actualizarService();
const validatorHandler = require("./../schemas/validator");
const {updateUser} = require("./../schemas/userSchema");
router.get("/", async (req,res,next) =>{
    try {
        res.send("user update");
    } catch (error) {
        next(error)
    }
});

router.post("/update",validatorHandler(updateUser,"body"),async (req,res) =>{
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