const express = require("express")
const cors = require("cors")
const routes = require("./routes");
const app = express()
const port = 3000

//
app.use(cors({
  origin: '*'
}));

app.use(express.json())

app.get('/ping', (req, res) => {
    /**
     * SE MODIFICA LA RESPUESTA
     * Objetivo: Responder utilizando JSON como estandar para la 
     *           construcción de APIs REST
     * Obs: TODO recurso-endpoint debe responder usando JSON
     */
    res.json({ message: 'pong' });
});

app.listen(port, () => {
    console.log('Backend running in port:  ' +  port);
});

/**
 * SE VINCULAN LAS RUTAS 
 */
app.use("/api/v1", routes);