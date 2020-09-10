const { Router } = require('express');

const { usersRouter }  = require('./users');
const routerApiV2 = Router();

routerApiV2.use('/users', usersRouter);

module.exports = routerApiV2;
