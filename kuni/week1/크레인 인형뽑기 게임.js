function solution(board, moves) {
  let answer = 0;
  let doll = 0;
  let target_floor = 0;
  let basket = [];
  let i = 0;

  while (i < moves.length) {
    target_floor = board.findIndex((floor) => floor[moves[i] - 1]);
    if (target_floor < 0) {
      i++;
    } else {
      doll = board[target_floor][moves[i] - 1];
      board[target_floor][moves[i] - 1] = 0;
      if (basket.length === 0) {
        basket.push(doll);
      } else if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
      i++;
    }
  }

  return answer;
}
