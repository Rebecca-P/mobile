const WaitingRoom = require("../models/WaitingRoom");
const generateRoomId = require("../functions/generateRoomId");

async function createRoom(creatorId) {
    tmpRoom = new WaitingRoom();
    try{
        tmpRoom.playerA_Id = creatorId;
        tmpRoom.playerB_Id = null;
        tmpRoom.Room_Id = await generateRoomId();
        tmpRoom.start = false;

    }
    catch(err)
    {
        console.error(err);
    }

    return new Promise((resolve, reject) => {
        tmpRoom.save(function(err) {
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

module.exports = createRoom;