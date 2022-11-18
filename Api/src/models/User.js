const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  { _id: {type: String, required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    favorites: [{type : mongoose.Schema.Types.ObjectId, ref: "Product"}],
    admin: {type: Boolean, default: false},
    password: {type: String, default: ""},
    picture: {type: String, default: ""}
  },
  {versionKey: false}
  );

const User = mongoose.model("User",UserSchema) 

module.exports = User;
