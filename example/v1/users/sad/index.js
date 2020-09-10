const { Router }= require('express');
const sadUsersRouter = Router();

sadUsersRouter.get('/', (req, res) => res.send('sad users!'));

module.exports = {
  sadUsersRouter,
};