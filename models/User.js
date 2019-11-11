const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    nbGamesVsIa: Number,
    nbWinsVsIa: Number,
    nbGamesVsPlayer: Number,
    nbWinsVsPlayer: Number
});

const User = mongoose.model("User", UserSchema);
module.exports = User;