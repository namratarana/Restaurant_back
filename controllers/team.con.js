const chef_Team = require('../models/team.model');

// add chef to the database
const create = (req,res)=>
{
    const {Id, Name, Image, AboutChef} = req.body;
    try
    {
        const team = new chef_Team(
            {
                Id,Name, Image, AboutChef
            }
        )
        team.save();
        res.status(200).send({message:"Added successfully"});
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send({message:"Error occured"});
    }
}

// Get all chefs
// const getAllChefs = (req,res)=>
// {
//     const {FilterByName}
// }
module.exports = {create}