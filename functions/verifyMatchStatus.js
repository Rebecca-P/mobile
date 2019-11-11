const getMatch = require("../services/getMatch");
const playOneRound = require("../services/playOneRound");

async function verifyMatchStatus(matchId)
{
    await getMatch(matchId)
    .then((result) => {
        if(result.match.choicePlayerA != -1 && result.match.choicePlayerB != -1)
        {
            playOneRound(result.match);
        }
    })
    .catch((error) => {
        console.log("StatusCode: " + error.StatusCode + "\nmsg: " + error.msg);
    });
}

module.exports = verifyMatchStatus;