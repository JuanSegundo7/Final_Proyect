const {Image} = require('../../db.js');

const createImage = async function(data){
    const {url,name} = data;
    const respuesta = await Image.create({url, name});
    return respuesta;
}

module.exports = createImage;