const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const  Dishes = new Schema(
    {
        Id:{type:Number, required:true, unique:true },
        Name :{type:String, required:true},
        Image :{type:String, required: true},
        Category: {type:String, required:true},
        Description : {type:String, required:true},
        Price: {type:Number, required: true}
    }
)

module.exports = Mongoose.model('dishes', Dishes);