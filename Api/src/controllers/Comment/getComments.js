const {Comment} = require('../../db.js');

const getComments = async ()=>{
    const allComments = await Comment.find();
    return allComments;
}

module.exports = getComments;