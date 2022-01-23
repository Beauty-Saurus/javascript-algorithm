function solution(array, commands) {
  const answer = commands.map((command) => {
    const piece = array.slice(command[0] - 1, command[1]);
    piece.sort((a, b) => a - b);

    return piece[command[2] - 1];
  });

  return answer;
}
