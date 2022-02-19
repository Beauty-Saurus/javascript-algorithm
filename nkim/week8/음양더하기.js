function solution(absolutes, signs) {
  var answer = 123456789;
  answer = absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -cur), 0);
  return answer;
}
