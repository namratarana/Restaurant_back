const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const chefTeam = new Schema(
    {
        Id : {type:Number, required:true,unique:true},
        Name : {type:String, required :true},
        Image : {type: String, required :true},
        AboutChef : {type: String, required :true}
    }
)

module.exports = Mongoose.model('chef_team', chefTeam);