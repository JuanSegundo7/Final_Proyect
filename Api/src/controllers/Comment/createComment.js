const {Comment} = require('../../db.js');

const createComment = async (content) => {
    if ((typeof(content)!=="string") || (!content.length)){
        throw new Error("Error: Comments cannot be empty and must be of text type.")
    }
    try {
        const comment = await Comment.create({content});
        return comment;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = createComment;