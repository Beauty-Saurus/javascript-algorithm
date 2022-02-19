function solution(w, h) {
  var answer = w * h;
  let non = 0;
  const m = h / w;

  for (let y = 0; y < h; y++) {
    const x1 = Math.floor(y / m);
    const x2 = Math.floor((y + 1) / m);
    non += m % ((y + 1) / x2) ? x2 - x1 + 1 : x2 - x1;
  }
  answer = answer - non;
  // feat 거니 지원 예나의 도움 ㅎㅎ
  return answer;
}
