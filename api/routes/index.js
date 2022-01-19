const express = require('express');
<<<<<<< HEAD
const loginRouter = require("./loginRouter")

function routerApi(app){
    const router = express.Router();
    app.use("/api/v1",router);
    router.use("/login",loginRouter);
}

module.exports = routerApi;
=======

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const loginRouter = require("./loginRouter");

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/login', loginRouter);
}

module.exports = routerApi;
>>>>>>> 4310080faeb7126e709607a7d366680b5d0b4715
