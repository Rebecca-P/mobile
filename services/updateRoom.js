const WaitingRoom = require("../models/WaitingRoom");
const getRoom = require("../services/getRoom");

function updateRoom(roomId, updates) {

    
    return new Promise((resolve, reject) => {
        getRoom(roomId)
        .then(function (){
            WaitingRoom.findOneAndUpdate({'Room_Id': roomId}, updates, err => {
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

module.exports = updateRoom;