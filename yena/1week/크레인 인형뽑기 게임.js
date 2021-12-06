function solution(board, moves) {
    var answer = 0;

    let newBoard = Array(board.length);

    for (let i = 0; i < board.length; i++) {
        newBoard[i] = Array(0);
    }

    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] !== 0) newBoard[j].push(board[i][j]);
        }
    }

    const buket = [];

    moves.map((item) => {
        const doll = newBoard[item - 1].pop();
        if (doll) {
            if (buket[buket.length - 1] === doll) {
                answer = answer + 2;
                buket.pop();
            } else {
                buket.push(doll);
            }
        }
    });

    return answer;
}
