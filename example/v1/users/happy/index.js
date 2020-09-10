const { Router }= require('express');
const happyUsersRouter = Router();
happyUsersRouter.get('/', (req, res) => res.send('happy users!'));

module.exports = {
  happyUsersRouter,
};