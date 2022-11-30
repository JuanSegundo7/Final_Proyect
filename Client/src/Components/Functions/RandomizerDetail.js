export default function RandomizerDetail(id,array) {
    var todosMenosUno = array.filter(unValor =>unValor._id!==id)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let final = [];

    for (let i=0;i<4;i++){
        const unArray = todosMenosUno.splice(getRandomInt(array.length-i), 1)
        const arrayToObj = unArray[0]
        final.push(arrayToObj)
    }

    return (
        final
    )
}
