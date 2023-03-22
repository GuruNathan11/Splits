var mongoose = require('mongoose');
var { Schema } = mongoose;

var Schema = new Schema({
    companyName:{
        required : true,
        type     : String
    },
    oldFV:{
        required : true,
        type     : Number
    },
    newFV:{
        required : true,
        type     : Number
    },
    splitDate:{
        required : true,
        type     : String
    }
    
},{versionKey:false});

Schema.path('companyName').validate(async (companyName) => {
    const nameCount = await mongoose.models.user.countDocuments({ companyName })
    return !nameCount
},'Name already Exists');


var users = module.exports = mongoose.model('user',Schema);
module.exports.get = function(callback,limit){
    users.find(callback).limit(limit);
}