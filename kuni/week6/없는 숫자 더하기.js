function solution(numbers) {
  let answer = 0;
  const fullNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filteredNumber = fullNumber.filter(
    (num) => numbers.includes(num) !== true
  );

  answer = filteredNumber.reduce((prev, cur) => prev + cur);
  return answer;
}
