function solution(board, moves) {
  var answer = 0;
  var now;
  var basket = [];
  for (var i=0; i< moves.length; i++) {
    var k = 0;
    for (var k; k < board.length; k++){
      if (board[k][moves[i]-1] !== 0)
        break;
    }
    if (k == board.length) continue;
    if (basket.length > 0) {
      if (basket[basket.length-1] === board[k][moves[i]-1]) {
        answer += 2;
        basket.pop();
      }
      else {
        basket.push(board[k][moves[i]-1]);
      }
    }
    else {
      basket.push(board[k][moves[i]-1]);
    }
    board[k][moves[i]-1] = 0;

  }
  return answer;
}

// board=[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
// moves=[1,5,3,5,1,2,1,4];
// console.log(solution(board, moves));
