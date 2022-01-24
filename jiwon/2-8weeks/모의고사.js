function solution(answers) {
  const cnt = [0, 0, 0];
  var answer = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.map((elem, index) => {
    if (elem === p1[index % 5]) cnt[0]++;
    if (elem === p2[index % 8]) cnt[1]++;
    if (elem === p3[index % 10]) cnt[2]++;
  })
  const max = cnt.reduce((prev, cur)=> {
    return prev < cur ? cur : prev;
  }, cnt[0]) 
  cnt.filter((elem, index) => {
    if (elem === max) answer.push(index+1);
  })

  return answer.sort((a, b) => a-b);;
}