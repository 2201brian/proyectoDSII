const express = require('express');
//--USER
const loginRouter = require("./loginRouter");
const createUser = require("./createUserRouter");
const actualizar = require("./actualizarUserRouter");
const listar = require("./userListRouter");
const eliminar = require("./deleteRouter");
//SOLICITUDES
const impresiones = require("./impresionesRouter");
const redaccion = require("./redaccionRouter");
const citas = require("./citasRouter");
const recibo = require("./recibosRouter");
const revisar = require("./revisarSolicitudes");
const router = express.Router();
//------------
router.use("/login",loginRouter);
router.use("/createAcount",createUser);
router.use("/documents",impresiones);
router.use("/updateUser",actualizar);
router.use("/redact",redaccion);
router.use("/date",citas);
router.use("/Issuance",recibo);
router.use("/List",revisar);
router.use("/ListaUser",listar);
router.use("/Delete",eliminar);
module.exports = router;
