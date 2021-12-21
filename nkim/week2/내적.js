function solution(a, b) {
  var answer = 1234567890;

  answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
