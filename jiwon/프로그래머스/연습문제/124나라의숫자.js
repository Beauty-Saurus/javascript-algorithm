function solution(n) {
  var answer = '';
  
  while (n > 3) {
      let mol = (n % 3) === 0 ? 3 : n % 3;
      n = (n % 3) === 0 ? parseInt(n / 3) - 1 : parseInt(n / 3);
      answer = mol + answer ;
  }
  if (n !== 0) {
      answer = n + answer;
  }
  answer = answer.replace(/3/g, '4');
  
  return answer;
}

/*
3진법으로 변환하는 과정에서
나머지가 0일 땐 몫에서 1을 빼고 나머지를 3으로 바꿔준다.
*/