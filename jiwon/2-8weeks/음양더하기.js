function solution(absolutes, signs) {
  var answer = 0;
  
  absolutes.map((elem, i) => {
      if (signs[i]) answer += elem;
      else answer -= elem;
  })
  return answer;
}
