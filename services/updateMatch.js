const Match = require("../models/Match");

async function updateMatch(matchId, updates) {
    return new Promise((resolve, reject) => {
        Match.findOneAndUpdate(matchId, updates, err => {
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
        })
        .catch((error) =>{
            console.log(error);
        })
    });
}

module.exports = updateMatch;