const mongoose = require("mongoose");

const  ImageSchema = mongoose.Schema({
    url:{
        type : String,
        required : true
    }
},
{versionKey: false})

const Image = mongoose.model("Image" , ImageSchema);

module.exports = Image;