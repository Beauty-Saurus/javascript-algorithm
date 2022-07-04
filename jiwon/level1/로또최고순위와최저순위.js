function solution(lottos, win_nums) {
  var answer = [];
  let hit = 0
  let not = 0
  lottos.map ((elem) => {
      if (win_nums.includes(elem)) hit++;
      if (elem === 0) not++;
  })
  answer.push(7 - (hit + not) < 6 ? 7 - (hit + not) : 6)
  answer.push(7 - hit < 6 ? 7 - hit : 6)
  return answer;
}