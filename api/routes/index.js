const express = require('express');
const loginRouter = require("./loginRouter");
const createUser = require("./createUserRouter");
const impresiones = require("./impresionesRouter");
const actualizar = require("./actualizarUserRouter");
const redaccion = require("./redaccionRouter");
const router = express.Router();
router.use("/login",loginRouter);
router.use("/createAcount",createUser);
router.use("/documents",impresiones);
router.use("/updateUser",actualizar);
router.use("/redact",redaccion);

module.exports = router;
