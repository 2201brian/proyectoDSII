const express = require('express');
const loginRouter = require("./loginRouter");
const createRouters = require("./createUserRouter")

function routerApi(app){
    const router = express.Router();
    app.use("/api/v1",router);
    router.use("/login",loginRouter);
    router.use("/createAccount", createRouters);
}

module.exports = routerApi;