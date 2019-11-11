const Match = require("../models/Match");
const getRoom = require("../services/getRoom");

async function createMatch(Room_Id, nbRounds) {
    tmpMatch = new WaitingRoom();
    try{
        await getRoom(Room_Id)
        .then(function(result) {
            tmpMatch.playerA_Id = result.room.playerA_Id;
            tmpMatch.playerB_Id = result.room.playerB_Id;
        })
        .catch(function() {
            console.log("Error getting Room");
        });
        tmpMatch.nbRounds = nbRounds;
        tmpMatch.currentRound = 0;
        tmpMatch.choicePlayerA = -1;
        tmpMatch.choicePlayerB = -1;
        tmpMatch.winsPlayerA = 0;
        tmpMatch.winsPlayerB = 0;
    }
    catch(err)
    {
        console.error(err);
    }

    return new Promise((resolve, reject) => {
        tmpMatch.save(function(err) {
            if (err) {
                reject({
                statusCode: 500,
                msg: "An internal error occurred while processing the request"
                });
            } else {
                resolve({
                statusCode: 200,
                msg: "The room was created successfully"
                });
            }
            });
        });
}

module.exports = createMatch;