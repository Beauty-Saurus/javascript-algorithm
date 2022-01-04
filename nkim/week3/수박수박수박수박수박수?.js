function solution(n) {
  var answer = "";
  [...Array(n).keys()].forEach((idx) => {
    if (idx % 2) answer += "박";
    else answer += "수";
  });
  return answer;
}
