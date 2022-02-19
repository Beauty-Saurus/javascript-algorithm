function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  d.reduce((acc, cur, i, origin) => {
    if (acc + cur > budget) origin.splice(1);
    else answer++;
    return acc + cur;
  }, 0);
  return answer;
}
