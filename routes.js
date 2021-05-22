const Express = require('express');
const Routes = (app)=>
{
    app.get('/',(req,res)=>
    {
        return res.send({message:"Server listening "});
    })
}
module.exports = Routes;
