const express = require('express');
const loginRouter = require("./loginRouter");
const createUser = require("./createUserRouter");
const impresiones = require("./impresionesRouter");

function routerApi(app){
    const router = express.Router();
    app.use("/api/v1",router);
    router.use("/login",loginRouter);
    router.use("/createAcount",createUser);
    router.use("/impresiones",impresiones);
    
}

module.exports = routerApi;