const WaitingRoom = require("../models/WaitingRoom");

function getRoom(roomId) {
    return new Promise((resolve, reject) => {
        WaitingRoom.findOne({'Room_Id': roomId}, function(err, room) {
            if (err) {
            reject({
                statusCode: 500,
                msg: "An internal error occurred while processing the request"
            });
            } else if (!room) {
            reject({
                statusCode: 200,
                msg: "No room is associated to the indicated id"
            });
            } else{
                resolve({
                    statusCode: 200,
                    msg: "Room found",
                    room
                })
            }
        });
    });
}

module.exports = getRoom;