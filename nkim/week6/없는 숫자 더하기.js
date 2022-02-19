function solution(numbers) {
  var answer = 0;
  const numObj = {};

  [...new Array(10)].forEach((_, i) => {
    numObj[i] = 0;
  });
  numbers.forEach((num) => {
    numObj[num]++;
  });
  Object.entries(numObj).forEach(([num, cnt]) => {
    if (!cnt) answer += parseInt(num);
  });

  return answer;
}
