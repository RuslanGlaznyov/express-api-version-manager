const { Router } = require('express');

const usersRouter = Router();

//in next generation api we have some changes
usersRouter.get('/happy', (req, res) => res.send('very happy users! ;)'));
//also additional end point
usersRouter.get('/angry', (req, res) => res.send('Aaaaaaaa!!!!'));

module.exports = {
  usersRouter,
};
