const express = require("express")
const cors = require("cors")
const routerApi = require("./routes");
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
    console.log('Running correctly');
  });

app.use(cors({
    origin: '*'
  }));

app.listen(port, () => {
    console.log('Backend running in port:  ' +  port);
  });
  
routerApi(app);  