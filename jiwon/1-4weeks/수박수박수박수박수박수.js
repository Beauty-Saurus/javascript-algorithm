function solution(n) {
  var answer = '';
  for (let i=0; i<n; i++){
    if (i%2==0) {
      answer = answer.concat('수');
    }
    else {
      answer = answer.concat('박');
    }
  }
  return answer;
}

// let n = 4;
// console.log(solution(n))