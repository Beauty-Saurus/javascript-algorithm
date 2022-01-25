function solution(answers) {
  var answer = [];

  const answer_cnt = [0, 0, 0];
  const pattern1 = [1, 2, 3, 4, 5]; //5
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]; //8
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10

  answers.forEach((answer, idx) => {
    if (pattern1[idx % pattern1.length] === answer) answer_cnt[0] += 1;
    if (pattern2[idx % pattern2.length] === answer) answer_cnt[1] += 1;
    if (pattern3[idx % pattern3.length] === answer) answer_cnt[2] += 1;
  });

  const max = Math.max(...answer_cnt);
  let idx = answer_cnt.indexOf(max);
  let i;
  while (idx != -1) {
    answer.push(idx + 1);
    i = idx + 1;
    idx = answer_cnt.indexOf(max, i);
  }

  return answer;
}
