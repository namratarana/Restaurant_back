const dishes = require('../models/dishes.model');

// add dishes to the database
const create = (req,res)=>
{
    const {Id, Name, Image,Category,Description, Price} = req.body;
    try
    {
        const dish = new dishes(
            {
                Id,Name, Image, Category,Description, Price
            }
        )
        dish.save();
        res.status(200).send({message:"Added successfully"});
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send({message:"Error occured"});
    }
}



module.exports = {create}