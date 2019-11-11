const Match = require("../models/Match");

const winner = [
    ['N','B','A'],//0
    ['A','N','B'],//1
    ['B','A','N'] //2
    //0   1   2
  ]
//0 --> rock; 1 --> paper; 2 --> scissors

function playOneRound(match)
{
    const winnerIs = winner[match.choicePlayerA][match.choicePlayerB];
    let nextMatchStatus = new Match(match);

    if(match.currentRound <= 6)
        nextMatchStatus.currentRound += 1;
        nextMatchStatus.choicePlayerA = -1;
        nextMatchStatus.choicePlayerB = -1;

    if(winnerIs === 'A')
    {
        nextMatchStatus.winsPlayerA +=1;
    }
    if(winnerIs === 'B')
    {
        nextMatchStatus.winsPlayerB +=1;
    }
    if(winnerIs === 'N')
    {
        nextMatchStatus.currentRound += 1;
        nextMatchStatus.choicePlayerA = -1;
        nextMatchStatus.choicePlayerB = -1;
        nextMatchStatus.winsPlayerA +=1;
    }
}

export default function playOneRound(playerA, playerB)