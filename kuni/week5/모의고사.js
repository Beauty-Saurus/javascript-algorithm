function solution(answers) {
  const answer = [];

  const supoza1 = [1, 2, 3, 4, 5];
  const supoza2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoza3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const supoza1Correct = answers.filter(
    (answer, i) => answer === supoza1[i % supoza1.length]
  ).length;
  const supoza2Correct = answers.filter(
    (answer, i) => answer === supoza2[i % supoza2.length]
  ).length;
  const supoza3Correct = answers.filter(
    (answer, i) => answer === supoza3[i % supoza3.length]
  ).length;

  const max = Math.max(supoza1Correct, supoza2Correct, supoza3Correct);

  let i = 1;
  new Array(supoza1Correct, supoza2Correct, supoza3Correct).forEach((value) => {
    if (value === max) {
      answer.push(i++);
    } else i++;
  });

  return answer;
}
