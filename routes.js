const Express = require('express');

const TeamController = require('./controllers/team.con'); 
const TeamRouter = Express.Router();

const DishController = require('./controllers/dishes.con');
const DishRouter = Express.Router();

TeamRouter.post('/',TeamController.create);
DishRouter.post('/',DishController.create);

const routes = (app)=>
{
    app.use('/team', TeamRouter);
    app.use('/dish', DishRouter);
}

module.exports = routes;