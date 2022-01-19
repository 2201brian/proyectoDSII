const express = require('express');
const loginRouter = require("./loginRouter")

function routerApi(app){
    const router = express.Router();
    app.use("/api/v1",router);
    router.use("/login",loginRouter);
}

module.exports = routerApi;