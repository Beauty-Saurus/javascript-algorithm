const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

function solution(a, b) {
  const multipliedArray = [];
  for (let i = 0; i < a.length; i++) {
    multipliedArray.push(a[i] * b[i]);
  }
  let answer = multipliedArray.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

console.log(solution(a, b));
