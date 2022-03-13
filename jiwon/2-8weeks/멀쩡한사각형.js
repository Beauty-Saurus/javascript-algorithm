function gcd(a, b) {
  let max = 0;
  let min = 0;
  a > b ? (max = a, min = b) : (max = b, min = a);
  if (max % min === 0) return min;
  return gcd(parseInt(max%min), min);
}

function solution(w, h) {
  var answer = w * h;
  // w, h의 최대공약수 구하기
  let max_d = gcd(w, h)
  answer -= max_d * (parseInt(w/max_d)+parseInt(h/max_d) - 1);
  return answer;
}
