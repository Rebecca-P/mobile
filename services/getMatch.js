const Match = require("../models/Match");

function getMatch(matchId) {
    return new Promise((resolve, reject) => {
        Match.findById(matchId, function(err, match) {
            if (err) {
            reject({
                statusCode: 500,
                msg: "An internal error occurred while processing the request"
            });
            } else if (!match) {
            reject({
                statusCode: 200,
                msg: "No match is associated to the indicated id"
            });
            } else{
                resolve({
                    statusCode: 200,
                    msg: "Match found",
                    match
                })
            }
        });
    });
}

module.exports = getMatch;