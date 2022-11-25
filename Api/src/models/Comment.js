const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
  { 
    content: {type: String, required: true}
  },
  {versionKey: false}
  );

const Comment = mongoose.model("Comment",CommentSchema) 

module.exports = Comment;