const mongoose = require('mongoose');
const { stringify } = require('querystring');

const userInfoSchema = new mongoose.Schema({
    profile_pic:{type:mongoose.Schema.ObjectId, ref:'images'},
    Name:String,
    userName:String,
    email:String,
    password:String,
    confirmPassword:String,
    zipCode:Number
})

module.exports = mongoose.model('users',userInfoSchema);