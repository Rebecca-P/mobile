const getRoomByGeneratedId = require("../services/getRoomByGeneratedId");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

async function generateRoomId() {
    let tempId = 0
    let validId = false;

    do
    {
        tempId = getRandomInt(10000);
        await getRoomByGeneratedId(tempId)
        .then(function(result) {
            tempId = getRandomInt(10000);
        })
        .catch(function(result) {
            validId = true;
        })

    }while(validId === false)

    return tempId;
}

module.exports = generateRoomId;