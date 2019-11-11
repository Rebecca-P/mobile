const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const Match = require("./models/Match");
const User = require("./models/User");
const WaitingRoom = require("./models/WaitingRoom");

const saveUser = require("./services/saveUser");
const createRoom = require("./services/createRoom");
const updateRoom = require("./services/updateRoom");
const getRoom = require("./services/getRoom");
const createMatch = require("./services/createMatch")
const updateMatch = require("./services/updateMatch");
const verifyMatchStatus = require("./functions/verifyMatchStatus");

app.use(cors());
app.use(express.json()); // for parsing application/json

// Connecting to the database
mongoose.connect(
  "mongodb://localhost:27017/MobileDB_Test",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(
        `Error while connecting to the MongoDB database: ${err.message}`
      );
    } else {
      console.log("Connected successfully to the MongoDB database");
    }
  }
);
mongoose.set('useFindAndModify', false);

app.post("/saveUser", function(req, res, next) {
    tmpUser = new User();
    tmpUser.username = req.body.username;
    tmpUser.nbGamesVsIa = 0;
    tmpUser.nbWinsVsIa = 0;
    tmpUser.nbGamesVsPlayer = 0;
    tmpUser.nbWinsVsPlayer = 0;

    saveUser(tmpUser)
    .then(function (saveUserQueryResponse) {
        res
            .status(saveUserQueryResponse.statusCode)
            .send(saveUserQueryResponse.msg);
    });
});

app.post("/createRoom", function(req, res, next) {
    createRoom(req.body.creatorId)
    .then(function (createRoomQueryResponse) {
        res
            .status(createRoomQueryResponse.statusCode)
            .send(createRoomQueryResponse.msg);
    })
    .catch(function (err) {
        res
            .status(err.statusCode)
            .send(err.msg);
    });
});

app.put("/joinRoom", function(req, res, next) {
    const updates = {
        playerB_Id: req.body.playerId
    };

    updateRoom(req.body.Room_Id, updates)
    .then(function (createRoomQueryResponse) {
        res
            .status(createRoomQueryResponse.statusCode)
            .send(createRoomQueryResponse.msg);
    })
    .catch(function (err) {
        res
            .status(err.statusCode)
            .send(err.msg);
    });

});

app.put("/start", function(req, res, next) {
    const updates = {
        start: true
    };

    updateRoom(req.body.Room_Id, updates)
    .then(function (createRoomQueryResponse) {
        res
            .status(createRoomQueryResponse.statusCode)
            .send(createRoomQueryResponse.msg);
    })
    .catch(function (err) {
        res
            .status(err.statusCode)
            .send(err.msg);
    });

    await createMatch(req.body.Room_Id, req.body.nbRounds);

});

app.put("/submitChoiceA", function(req, res, next) {
    const updates = {
        "choicePlayerA": req.body.choicePlayerA
    }
    await updateMatch(req.body.matchId, updates)
    .then(function (updateMatchQueryResponse) {
        res
            .status(updateMatchQueryResponse.statusCode)
            .send(updateMatchQueryResponse.msg);
            
    }).catch(function (err) {
        res
            .status(err.statusCode)
            .send(err.msg);
    });
    verifyMatchStatus(req.body.matchId);
});

app.put("/submitChoiceB", function(req, res, next) {
    const updates = {
        "choicePlayerB": req.body.choicePlayerB
    }
    await updateMatch(req.body.matchId, updates)
    .then(function (updateMatchQueryResponse) {
        res
            .status(updateMatchQueryResponse.statusCode)
            .send(updateMatchQueryResponse.msg);
            
    }).catch(function (err) {
        res
            .status(err.statusCode)
            .send(err.msg);
    });
    verifyMatchStatus(req.body.matchId);
});

app.get("/getRoom", function(req, res, next) {
    getRoom(req.body.Room_Id)
    .then(function (createRoomQueryResponse) {
        res
            .status(createRoomQueryResponse.statusCode)
            .send(createRoomQueryResponse.msg);
    })
    .catch(function (err) {
        res
            .status(err.statusCode)
            .send(err.msg);
    });

});


app.listen(3000, () => {
    console.log("Server is running in port: 3000");
  });