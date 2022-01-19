<<<<<<< HEAD
const express = require("express")
const cors = require("cors")
const routerApi = require("./routes");
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hola mi server en express');
  });

  
app.listen(port, () => {
    console.log('Mi port' +  port);
  });
  
routerApi(app);  
=======
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
>>>>>>> 4310080faeb7126e709607a7d366680b5d0b4715
