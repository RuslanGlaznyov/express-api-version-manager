const { Router }= require('express');
const { usersRouter } = require('./users');

const routerApiV1 = Router();

routerApiV1.use('/users', usersRouter);

module.exports = routerApiV1;