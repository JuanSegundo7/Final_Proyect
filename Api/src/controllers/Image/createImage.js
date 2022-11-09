const {Image} = require('../../db.js');

const createImage = async function(url){
    const respuesta = await Image.create({url});
    return respuesta;
}

module.exports = createImage;