const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    originalname:String,
    destination:String,
    mimetype:String,
    path:String
    
})

module.exports = mongoose.model('images',imageSchema);