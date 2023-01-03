function solution(s) {
  var answer = [];
  s.split("").map((elem, index) => {
    const i = s.slice(0, index).lastIndexOf(elem);
    if (i === -1) answer.push(i);
    else answer.push(index - i);
  });
  return answer;
}
