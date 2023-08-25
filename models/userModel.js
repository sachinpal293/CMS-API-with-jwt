const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "please fill the username"]
    },
    email:{
        type:String,
        required:[true, "please fill the email"],
        unique:[true, "Email id is already taken"]
    },
    password:{
        type:String,
        required:[true, "please fill the password"]
    }
},{
    timestamps: true
   });

module.exports = mongoose.model('User', userSchema)