function solution(N, stages) {
  let answer = [];
  let people = stages.length;

  for (let i = 1; i <= N + 1; i++) {
    let tmp = stages.filter((n) => n === i).length;
    answer.push([i, tmp / people]);
    people -= tmp;
  }
  answer.pop();
  answer = answer.sort((a, b) => b[1] - a[1]);
  return answer.map((a) => a[0]);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));
