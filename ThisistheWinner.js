

const winner = [
    ['N','B','A'],//0
    ['A','N','B'],//1
    ['B','A','N'] //2
    //0   1   2
  ]
  export default function ThisistheWinner(playerA, playerB)
  {
    const winnerIs = winner[playerA][playerB];

    if(winnerIs === 'A')
      return 'You win';
    if(winnerIs === 'B')
      return 'You lose';
    if(winnerIs === 'N')
      return 'No one win';
  }