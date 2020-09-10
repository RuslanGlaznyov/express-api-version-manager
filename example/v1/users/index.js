const { Router } = require('express');

const { happyUsersRouter } = require('./happy');
const { sadUsersRouter } = require('./sad');

const usersRouter = Router();

usersRouter.use('/happy', happyUsersRouter);
usersRouter.use('/sad', sadUsersRouter);

module.exports = {
  usersRouter
};
