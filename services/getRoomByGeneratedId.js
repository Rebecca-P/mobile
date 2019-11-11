const WaitingRoom = require("../models/WaitingRoom");

function getRoomByGeneratedId(generatedRoomId) {
  return new Promise((resolve, reject) => {
    WaitingRoom.findOne({'Room_Id': generatedRoomId}, function(err, room) {
      if (err) {
        reject({
          statusCode: 500,
          msg: "An internal error occurred while processing the request"
        });
      } else {
        if(room != null)
        {
          resolve({
            statusCode: 200,
            msg: "Room found",
          });
        }
        else{
          reject({
            statusCode: 500,
            msg: "Room not found",
          })
        }
      }
    });
  });
}

module.exports = getRoomByGeneratedId;