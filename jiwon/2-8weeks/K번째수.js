function solution(array, commands) {
  var answer = [];
  commands.map((culc, i) => {
    answer.push(array.slice(culc[0]-1, culc[1]).sort((a, b)=>a-b)[culc[2]-1]);
  })
  return answer;
}