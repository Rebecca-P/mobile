const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WaitingRoomSchema = new Schema({
    playerA_Id: Schema.Types.ObjectId,
    playerB_Id: Schema.Types.ObjectId,
    Room_Id: Number,
    nbRounds: Number,
    start: Boolean
});

const WaitingRoom = mongoose.model("WaitingRoom", WaitingRoomSchema);
module.exports = WaitingRoom;