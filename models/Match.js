const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    playerA_Id: Schema.Types.ObjectId,
    playerB_Id: Schema.Types.ObjectId,
    nbRounds: Number,
    currentRound: Number,
    choicePlayerA: Number,
    choicePlayerB: Number,
    winsPlayerA: Number,
    winsPlayerB: Number,
});

const Match = mongoose.model("Match", MatchSchema);
module.exports = Match;