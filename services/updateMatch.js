const Match = require("../models/Match");
const getMatch = require("../services/getMatch");

async function updateMatch(matchId, updates) {
    return new Promise((resolve, reject) => {
        getRoom(associatedRoomId)
        .then(function (){
            WaitingRoom.findOneAndUpdate(matchId, updates, err => {
                if (err) {
                    reject({
                    statusCode: 500,
                    msg: "An internal error occurred while processing the request"
                    });
                } else {
                    resolve({
                    statusCode: 200,
                    msg: "Update successful"
                    });
                }
            });
        })
        .catch(function (error){
            reject({
                statusCode: error.statusCode,
                msg: error.msg
            })
        })
    });
}

module.exports = updateMatch;