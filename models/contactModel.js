const mongoose = require('mongoose');


const Schema = mongoose.Schema({
    user_id : {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref:"User"
    },
    name:{
        type:String,
        required:[true, "Please add the contact name"]
    },
    Email:{
        type:String,
        required:[true, "Please add the contact email"]
    },
    Phone:{
        type:String,
        required:[true, "Please add the contact phone"]
    }
},{
 timestamps: true
})


module.exports = mongoose.model('Contact',Schema)