const express = require("express");
const router = express.Router();
const loginService = require("../services/loginServices");
const service = new loginService();

router.get("/", async (req,res,next) =>{
    try {
        res.send("estas en login");
    } catch (error) {
        next(error)
    }
});

router.post("/check",async (req,res,next) =>{
    try {
    const {username,password} = req.body
    const login = await service.find(username,password);
    if(login){
        res.json("Found")
    }
    else{
        res.json("Not Registered")
    } 
    } catch (error) {
        next(error)
    }
});

module.exports = router