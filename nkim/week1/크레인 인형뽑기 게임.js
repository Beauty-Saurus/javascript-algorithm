function solution(board, moves) {
  var answer = 0;
  const nlen = board[0].length;
  let baskets = [-1];

  for (let mv of moves) {
    mv--;
    for (const row of board) {
      if (row[mv] != 0) {
        if (baskets[baskets.length - 1] === row[mv]) {
          baskets.pop();
          answer += 2;
        } else baskets.push(row[mv]);
        row[mv] = 0;
        break;
      }
    }
  }
  return answer;
}
