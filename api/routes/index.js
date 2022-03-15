const express = require('express');
const loginRouter = require("./loginRouter");
const createUser = require("./createUserRouter");
const impresiones = require("./impresionesRouter");
const actualizar = require("./actualizarUserRouter");

const router = express.Router();
router.use("/login",loginRouter);
router.use("/createAcount",createUser);
router.use("/documents",impresiones);
router.use("/updateUser",actualizar);

module.exports = router;
