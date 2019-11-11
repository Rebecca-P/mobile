const getMatch = require("../services/getMatch");
const playOneRound = require("./playOneRound");

function verifyMatchStatus(matchId)
{
    getMatch(matchId)
    .then((result) => {
        console.log(result.match);
        if((result.match.choicePlayerA != -1) && (result.match.choicePlayerB != -1))
        {
            playOneRound(result.match);
        }
    })
    .catch((error) => {
        console.log("StatusCode: " + error.StatusCode + "\nmsg: " + error.msg);
    });
}

module.exports = verifyMatchStatus;