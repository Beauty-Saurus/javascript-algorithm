function solution(d, budget) {
  var answer = 0;
  let sum = 0;

  d = d.sort (function(a, b) {return a - b});
  d.map((elem, i) => {
      sum += elem;
      if (sum <= budget) answer++;
  })
  return answer;
}
